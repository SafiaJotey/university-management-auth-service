import httpStatus from 'http-status'
import mongoose from 'mongoose'
import config from '../../../config'
import ApiError from '../../../error/ApiError'
import { IStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { AcademicSemester } from './../academicSemester/academicSemester.model'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateStudentId } from './user.utility'

const createStudent = async (
  student: IStudent,
  user: IUser
): Promise<IUser | null> => {
  let newUserAllData = null
  //default password
  if (!user.password) {
    user.password = config.deafult_student_password as string
  } //set role
  user.role = 'student'
  const academicsemister = await AcademicSemester.findById(
    student.academicSemester
  )

  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    //generate increment id
    const id = await generateStudentId(academicsemister)

    user.id = id
    student.id = id
    const newstudent = await Student.create([student], { session })
    if (!newstudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'failed to create student')
    }
    //set student->_id into user
    user.student = newstudent[0]._id
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'failed to create user')
    }
    newUserAllData = newUser[0]
    await session.commitTransaction()

    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        {
          path: 'academicSemester',
        },
        {
          path: 'academicDepartment',
        },
        {
          path: 'academicFaculty',
        },
      ],
    })
  }
  return newUserAllData
}

export const UserServices = {
  createStudent,
}

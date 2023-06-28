import { IAcademicSemester } from './../academicSemester/academicSemester.interface'
import { User } from './user.model'

//function to fetch the last created user id
export const findLastStudentId = async () => {
  const lastUStudentId = await User.findOne(
    { role: 'student' },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastUStudentId?.id ? lastUStudentId.id.substring(4) : undefined
}

// function for generate id for new user
export const generateStudentId = async (
  academicSemester: IAcademicSemester | null
): Promise<string> => {
  const currentId = (await findLastStudentId()) || '0'
  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementId = `${academicSemester?.year.substring(2)}${
    academicSemester?.code
  }${incrementId}`

  return incrementId
}

export const findLastFacultyId = async () => {
  const facultyUserId = await User.findOne(
    { role: 'faculty' },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean()
  return facultyUserId?.id ? facultyUserId.id.substring(2) : null
}
export const generateFacultyId = async (): Promise<string> => {
  const currentId = (await findLastFacultyId()) || '0'

  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementId = `F-${incrementId}`

  return incrementId
}

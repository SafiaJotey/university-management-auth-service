import status from 'http-status'
import { Schema, model } from 'mongoose'
import ApiError from '../../../error/ApiError'
import { academicSemesterConstant } from './academicSemester.constant'
import {
  IAcademicSemester,
  academicSemesterModel,
} from './academicSemester.interface'

//  Creating a Schema for users
const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterConstant.academicSemesterTitle,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterConstant.academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterConstant.academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterConstant.academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  }
)
//pre-hook
academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'This course is already exist')
  }
  next()
})

// Creating a Model.
export const AcademicSemester = model<IAcademicSemester, academicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)

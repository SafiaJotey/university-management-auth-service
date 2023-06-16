import { Schema, model } from 'mongoose'

import {
  IAcademicFaculty,
  academicFacultyModel,
} from './academicFaculty.interface'

//  Creating a Schema for users
const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
//pre-hook
// academicFacultySchema .pre('save', async function (next) {
//   const isExist = await AcademicSemester.findOne({
//     title: this.title,
//     year: this.year,
//   })
//   if (isExist) {
//     throw new ApiError(status.CONFLICT, 'This course is already exist')
//   }
//   next()
// })

// Creating a Model.
export const AcademicFaculty = model<IAcademicFaculty, academicFacultyModel>(
  'AcademicFaculty',
  academicFacultySchema
)

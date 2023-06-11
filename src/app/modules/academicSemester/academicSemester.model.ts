import { Schema, model } from 'mongoose'
import {
  IAcademicSemester,
  academicSemesterModel,
} from './academicSemester.interface'

// Create a new Model type that knows about IUserMethods...

//  Creating a Schema for users
const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// Creating a Model.
export const AcademicSemesterSchema = model<
  IAcademicSemester,
  academicSemesterModel
>('AcademicSemesterSchema ', academicSemesterSchema)

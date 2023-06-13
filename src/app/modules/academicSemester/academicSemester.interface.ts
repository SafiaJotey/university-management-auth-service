import { Model } from 'mongoose'
export type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'
export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall'
export type IAcademicSemesterCode = '01' | '02' | '03'

// creating interface for academicSemester
export type IAcademicSemester = {
  title: IAcademicSemesterTitle
  year: number
  code: IAcademicSemesterCode
  startMonth: IAcademicSemesterMonth
  endMonth: IAcademicSemesterMonth
}

// Create a new Model type that knows aboutIAcademicSemester...

export type academicSemesterModel = Model<
  IAcademicSemester,
  Record<string, number>
>

// creating interface for academicSemester

import { Model } from 'mongoose'

export type IAcademicSemester = {
  title: string
  year: number
  code: string
  startMonth: string
  endMonth: string
}

// Create a new Model type that knows aboutIAcademicSemester...

export type academicSemesterModel = Model<
  IAcademicSemester,
  Record<string, number>
>

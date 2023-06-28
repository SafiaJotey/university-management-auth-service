import { Model } from 'mongoose'

export type IAcademicFaculty = {
  title: string
}
export type IAcademFacultyrFilters = {
  searchTerm: string
}

// Create a new Model type that knows aboutIAcademicSemester...

export type academicFacultyModel = Model<
  IAcademicFaculty,
  Record<string, unknown>
>

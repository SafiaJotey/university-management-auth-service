import { z } from 'zod'

//Zod Validation
const updateAcademicFaculty = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
})

const createAcademicFaculty = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
})

export const academicFacultyValidation = {
  createAcademicFaculty,
  updateAcademicFaculty,
}

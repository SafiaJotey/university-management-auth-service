import { z } from 'zod'
import { academicSemesterConstant } from './academicSemester.constant'

//Zod Validation
const createAcademicSemester = z.object({
  body: z.object({
    title: z.enum(
      [...academicSemesterConstant.academicSemesterTitle] as [
        string,
        ...string[]
      ],
      {
        required_error: 'Title is required',
      }
    ),
    year: z.string({
      required_error: 'Year is required',
    }),
    code: z.enum(
      [...academicSemesterConstant.academicSemesterCode] as [
        string,
        ...string[]
      ],
      {
        required_error: 'code is required',
      }
    ),
    startMonth: z.enum(
      [...academicSemesterConstant.academicSemesterMonth] as [
        string,
        ...string[]
      ],
      {
        required_error: 'Start month is required',
      }
    ),
    endMonth: z.enum(
      [...academicSemesterConstant.academicSemesterMonth] as [
        string,
        ...string[]
      ],
      {
        required_error: 'End month is required',
      }
    ),
  }),
})

export const academicSemesterValidation = {
  createAcademicSemester,
}

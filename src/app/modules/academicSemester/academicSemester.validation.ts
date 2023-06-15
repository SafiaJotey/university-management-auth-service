import { z } from 'zod'
import { academicSemesterConstant } from './academicSemester.constant'

//Zod Validation
const updateAcademicSemester = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesterConstant.academicSemesterTitle] as [
          string,
          ...string[]
        ])
        .optional(),
      year: z.string().optional(),
      code: z
        .enum([...academicSemesterConstant.academicSemesterCode] as [
          string,
          ...string[]
        ])
        .optional(),
      startMonth: z
        .enum([...academicSemesterConstant.academicSemesterMonth] as [
          string,
          ...string[]
        ])
        .optional(),
      endMonth: z
        .enum([...academicSemesterConstant.academicSemesterMonth] as [
          string,
          ...string[]
        ])
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'either both title and code should be provided or neither',
    }
  )
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
  updateAcademicSemester,
}

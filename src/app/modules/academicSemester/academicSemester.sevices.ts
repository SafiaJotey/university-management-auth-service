import status from 'http-status'
import ApiError from '../../../error/ApiError'
import { academicSemesterConstant } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  if (
    academicSemesterConstant.academicSemesterMappingTitleCode[payload.title] !==
    payload.code
  ) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid course code')
  }
  const result = await AcademicSemester.create(payload)

  return result
}

export const AcademicSemesterServices = {
  createSemester,
}

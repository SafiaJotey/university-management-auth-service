import status from 'http-status'
import { SortOrder } from 'mongoose'
import { IPagination } from '../../../Interfaces/paginationInterface'
import { IGenericRespose } from '../../../Interfaces/responseInterface'
import ApiError from '../../../error/ApiError'
import { paginationHelpers } from '../../../helpers/paginationHelper'
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

const getAllSemester = async (
  paginationOption: IPagination
): Promise<IGenericRespose<IAcademicSemester[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.caculatePaginatrion(paginationOption)

  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const result: IAcademicSemester[] = await AcademicSemester.find({})
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
  const total = await AcademicSemester.count()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

export const AcademicSemesterServices = {
  createSemester,
  getAllSemester,
}

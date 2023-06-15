import status from 'http-status'
import { SortOrder } from 'mongoose'
import { IPagination } from '../../../Interfaces/paginationInterface'
import { IGenericRespose } from '../../../Interfaces/responseInterface'
import ApiError from '../../../error/ApiError'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { academicSemesterConstant } from './academicSemester.constant'
import {
  IAcademicSemester,
  IAcademicSemesterFilters,
} from './academicSemester.interface'
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
  filters: IAcademicSemesterFilters,
  paginationOption: IPagination
): Promise<IGenericRespose<IAcademicSemester[]>> => {
  const { searchTerm, ...filterData } = filters

  const andConditions = []
  if (searchTerm) {
    andConditions.push({
      $or: academicSemesterConstant.academicSemesterSearchableFields.map(
        field => ({
          [field]: {
            $regex: searchTerm,
            $options: 'i',
          },
        })
      ),
    })
  }
  if (Object.keys(filterData).length) {
    andConditions.push({
      $and: Object.entries(filterData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.caculatePaginatrion(paginationOption)

  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}
  const result: IAcademicSemester[] = await AcademicSemester.find(
    whereCondition
  )
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
const getSingleSemester = async (
  id: string
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSemester.findOne({ _id: id })

  return result
}

export const AcademicSemesterServices = {
  createSemester,
  getAllSemester,
  getSingleSemester,
}

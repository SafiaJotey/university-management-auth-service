import { SortOrder } from 'mongoose'
import { IPagination } from '../../../Interfaces/paginationInterface'
import { IGenericRespose } from '../../../Interfaces/responseInterface'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { academicFacultyConstant } from './academicFaculty.constant'
import {
  IAcademFacultyrFilters,
  IAcademicFaculty,
} from './academicFaculty.interface'
import { AcademicFaculty } from './academicFaculty.model'

const createAcademicFaculty = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.create(payload)

  return result
}

const getAllFaculties = async (
  filters: IAcademFacultyrFilters,
  paginationOption: IPagination
): Promise<IGenericRespose<IAcademicFaculty[]>> => {
  const { searchTerm, ...filterData } = filters

  const andConditions = []
  if (searchTerm) {
    andConditions.push({
      $or: academicFacultyConstant.academicFacultySearchableFields.map(
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
  const result: IAcademicFaculty[] = await AcademicFaculty.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await AcademicFaculty.count()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}
const getSingleFaculty = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findOne({ _id: id })

  return result
}
const deleteFaculty = async (id: string): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findByIdAndDelete({ _id: id })
  console.log(result)
  return result
}
const updateFaculty = async (
  id: string,
  payload: Partial<IAcademicFaculty>
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })

  return result
}

export const AcademicFacultyServices = {
  createAcademicFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
}

import { Request, Response } from 'express'
import httpStatus, { default as status } from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

import { pagination } from '../../../constants/pagination'
import { pick } from '../../../shared/pick'
import { academicFacultyConstant } from './academicFaculty.constant'
import { IAcademicFaculty } from './academicFaculty.interface'
import { AcademicFacultyServices } from './academicFaculty.services'

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { title } = req.body

    const newSemester = await AcademicFacultyServices.createAcademicFaculty({
      title,
    })
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Faculty created successfully',
      data: newSemester,
    })
  }
)
const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filters: any = pick(
      req.query,
      academicFacultyConstant.academicFacultyfilterableFields
    )
    const paginationOption = pick(req.query, pagination)

    const result = await AcademicFacultyServices.getAllFaculties(
      filters,
      paginationOption
    )
    sendResponse<IAcademicFaculty[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculties retrived successfully',
      meta: result.meta,
      data: result.data,
    })
  }
)

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id

  const result = await AcademicFacultyServices.getSingleFaculty(id)
  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty retrived successfully',

    data: result,
  })
})

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id
  const updatedField: Partial<IAcademicFaculty> = req.body

  const result = await AcademicFacultyServices.updateFaculty(id, updatedField)
  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty updated successfully',

    data: result,
  })
})
const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id
  console.log(id)
  const result = await AcademicFacultyServices.deleteFaculty(id)
  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty deleted successfully',

    data: result,
  })
})

export const AcademicSemesterControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
}

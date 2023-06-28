import { Request, Response } from 'express'
import { default as httpStatus, default as status } from 'http-status'
import { pagination } from '../../../constants/pagination'
import { catchAsync } from '../../../shared/catchAsync'
import { pick } from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { academicSemesterConstant } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterServices } from './academicSemester.sevices'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemester } = req.body

  const newSemester = await AcademicSemesterServices.createSemester(
    academicSemester
  )
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Semester created successfully',
    data: newSemester,
  })
})
const getAllSemester = catchAsync(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filters: any = pick(
    req.query,
    academicSemesterConstant.academicSemesterfilterableFields
  )
  const paginationOption = pick(req.query, pagination)

  const result = await AcademicSemesterServices.getAllSemester(
    filters,
    paginationOption
  )
  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semesters retrived successfully',
    meta: result.meta,
    data: result.data,
  })
})
const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id

  const result = await AcademicSemesterServices.getSingleSemester(id)
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester retrived successfully',

    data: result,
  })
})
const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id
  const updatedField: Partial<IAcademicSemester> = req.body

  const result = await AcademicSemesterServices.updateSemester(id, updatedField)
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester updated successfully',

    data: result,
  })
})
const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id

  const result = await AcademicSemesterServices.deleteSemester(id)
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester deleted successfully',

    data: result,
  })
})

export const AcademicSemesterControllers = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester,
}

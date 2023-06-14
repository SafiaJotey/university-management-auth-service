import { NextFunction, Request, Response } from 'express'
import { default as httpStatus, default as status } from 'http-status'
import { pagination } from '../../../constants/pagination'
import { catchAsync } from '../../../shared/catchAsync'
import { pick } from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterServices } from './academicSemester.sevices'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
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
    next()
  }
)
const gettAllSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOption = pick(req.query, pagination)

    const result = await AcademicSemesterServices.getAllSemester(
      paginationOption
    )
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester retrived successfully',
      meta: result.meta,
      data: result.data,
    })
    next()
  }
)

export const AcademicSemesterControllers = {
  createSemester,
  gettAllSemester,
}

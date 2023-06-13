import { NextFunction, Request, Response } from 'express'
import status from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
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
      messege: 'Semester created successfully',
      data: newSemester,
    })
    next()
  }
)

export const AcademicSemesterControllers = {
  createSemester,
}

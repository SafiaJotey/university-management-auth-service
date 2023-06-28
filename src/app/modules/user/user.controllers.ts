import { Request, Response } from 'express'
import status from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserServices } from './user.services'
// import { UserServices } from './user.services'

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student, ...user } = req.body

  const newUser = await UserServices.createStudent(student, user)

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'successfully create a new user!',
    data: newUser,
  })
})
export const UserControllers = {
  createStudent,
}

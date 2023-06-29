import { Request, RequestHandler, Response } from 'express'
import { default as httpStatus, default as status } from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import { UserService } from './user.services'
// import { UserServices } from './user.services'

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student, ...user } = req.body

  const newUser = await UserService.createStudent(student, user)

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'successfully create a new user!',
    data: newUser,
  })
})
const createFaculy: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { faculty, ...userData } = req.body
    const result = await UserService.createFaculty(faculty, userData)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  }
)

const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { admin, ...userData } = req.body
    const result = await UserService.createAdmin(admin, userData)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin created successfully!',
      data: result,
    })
  }
)

export const UserController = {
  createStudent,
  createFaculy,
  createAdmin,
}

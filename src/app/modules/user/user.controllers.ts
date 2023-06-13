import { NextFunction, Request, Response } from 'express'
import status from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserServices } from './user.services'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body

    const newUser = await UserServices.createUser(user)

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      messege: 'successfully create a new user!',
      data: newUser,
    })
    next()
  }
)
export const UserControllers = {
  createUser,
}

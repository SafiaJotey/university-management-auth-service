import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

const login = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'successfully create a new logged in!',
    data: [],
  })
})

export const AuthController = {
  login,
}

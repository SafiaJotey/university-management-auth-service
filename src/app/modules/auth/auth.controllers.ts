// import httpStatus from 'http-status'
// import { catchAsync } from '../../../shared/catchAsync'
// import sendResponse from '../../../shared/sendResponse'
// import { AuthService } from './auth.services'
// import config from '../../../config';
// import { ILoginUserResponse } from './auth.interface';

// const loginUser = catchAsync(async (req: Request, res: Response) => {
//   const { ...loginData } = req.body;
//   const result = await AuthService.loginUser(loginData);
//   const { refreshToken, ...others } = result;

//   // set refresh token into cookie

//   const cookieOptions = {
//     secure: config.env === 'production',
//     httpOnly: true,
//   };

//   res.cookie('refreshToken', refreshToken, cookieOptions);

//   sendResponse<ILoginUserResponse>(res, {
//     statusCode: 200,
//     success: true,
//     message: 'User lohggedin successfully !',
//     data: others,
//   });
// });

// export const AuthController = {
//   loginUser,
// }

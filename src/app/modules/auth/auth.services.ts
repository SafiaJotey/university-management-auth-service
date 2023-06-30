import httpStatus from 'http-status'
import { Secret } from 'jsonwebtoken'
import config from '../../../config'
import ApiError from '../../../error/ApiError'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import { User } from '../user/user.model'
import { ILoginUser, ILoginUserResponse } from './auth.interface'

const loginUser = async (
  payload: ILoginUser
): Promise<ILoginUserResponse | null> => {
  const { id, password } = payload
  const isUserExist = await User.isUserExist(id)
  if (isUserExist.password && !isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found!')
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatch(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }
  const { id: userId, role, needsPasswordChange } = isUserExist
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.jwt_secret as Secret,
    config.jwt.jwt_expire_in as string
  )

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.jwt_refresh_secret as Secret,
    config.jwt.jwt_refresh_exprire_in as string
  )

  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  }
}

export const AuthService = {
  loginUser,
}

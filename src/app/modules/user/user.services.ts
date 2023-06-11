import config from '../../../config'
import ApiError from '../../../error/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utility'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //generate increment id
  const id = await generateUserId()
  user.id = id
  //default password for new user
  if (!user.password) {
    user.password = config.deafult_user_password as string
  }

  const newUser = await User.create(user)
  if (!newUser) {
    throw new ApiError(440, 'Failed to create new user')
  }
  return newUser
}

export const UserSerrvices = {
  createUser,
}

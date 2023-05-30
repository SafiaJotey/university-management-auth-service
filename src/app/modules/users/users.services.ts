import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utility'

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
    throw new Error('Failed to create new user')
  }
  return newUser
}

export default {
  createUser,
}

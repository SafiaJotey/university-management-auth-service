import { Request, Response } from 'express'
import usersServices from './users.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body

    const newUser = await usersServices.createUser(user)
    res.status(200).json({
      success: true,
      message: 'successfully create a new user!',
      data: newUser,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Cannot create an user',
    })
  }
}
export default {
  createUser,
}

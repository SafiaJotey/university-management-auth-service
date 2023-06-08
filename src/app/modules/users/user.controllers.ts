import { NextFunction, Request, Response } from 'express'
import { UserSerrvices } from './user.services'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body

    const newUser = await UserSerrvices.createUser(user)
    res.status(200).json({
      success: true,
      message: 'successfully create a new user!',
      data: newUser,
    })
  } catch (err) {
    next(err)
  }
}
export const UserControllers = {
  createUser,
}

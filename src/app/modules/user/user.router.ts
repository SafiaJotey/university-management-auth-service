import express from 'express'
import validateRequest from '../../midlewires/validateRequest'
import { UserControllers } from './user.controllers'
import { userValidation } from './user.validation'

const router = express.Router()
router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  UserControllers.createUser
)
export const UserRoutes = router

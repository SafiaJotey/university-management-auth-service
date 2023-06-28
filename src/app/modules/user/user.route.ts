import express from 'express'
import validateRequest from '../../midlewires/validateRequest'
import { UserControllers } from './user.controllers'
import { UserValidation } from './user.validation'

const router = express.Router()
router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserControllers.createStudent
)
export const UserRoutes = router

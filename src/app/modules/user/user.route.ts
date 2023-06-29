import express from 'express'

import validateRequest from '../../midlewires/validateRequest'
import { UserController } from './user.controllers'
import { UserValidation } from './user.validation'
const router = express.Router()

router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent
)

router.post(
  '/create-faculty',
  validateRequest(UserValidation.createFacultyZodSchema),
  UserController.createFaculy
)

router.post(
  '/create-admin',
  validateRequest(UserValidation.createAdminZodSchema),
  UserController.createAdmin
)

export const UserRoutes = router

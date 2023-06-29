import express from 'express'

import validateRequest from '../../midlewires/validateRequest'

import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller.s'
const router = express.Router()

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.login
)

export const AuthRoutes = router

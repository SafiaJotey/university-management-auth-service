import express from 'express'
import validateRequest from '../../midlewires/validateRequest'
import { AcademicSemesterControllers } from './academicSemester.controllers'
import { academicSemesterValidation } from './academicSemester.validation'

const router = express.Router()
router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createAcademicSemester),
  AcademicSemesterControllers.createSemester
)
export const academicSemesterRoutes = router

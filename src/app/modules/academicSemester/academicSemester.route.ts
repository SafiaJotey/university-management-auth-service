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
router.get('/:id', AcademicSemesterControllers.getSingleSemester)
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademicSemester),
  AcademicSemesterControllers.updateSemester
)
router.delete(
  '/:id',

  AcademicSemesterControllers.deleteSemester
)
router.get(
  '/',

  AcademicSemesterControllers.getAllSemester
)
export const academicSemesterRoutes = router

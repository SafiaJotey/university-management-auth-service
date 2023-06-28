import express from 'express'
import validateRequest from '../../midlewires/validateRequest'
import { AcademicSemesterControllers } from './academicFaculty.controllers'
import { academicFacultyValidation } from './academicFacultyValidation'

const router = express.Router()
router.post(
  '/create-faculty',
  validateRequest(academicFacultyValidation.createAcademicFaculty),
  AcademicSemesterControllers.createAcademicFaculty
)

router.get('/:id', AcademicSemesterControllers.getSingleFaculty)
router.patch(
  '/:id',
  validateRequest(academicFacultyValidation.updateAcademicFaculty),
  AcademicSemesterControllers.updateFaculty
)
router.delete(
  '/:id',

  AcademicSemesterControllers.deleteFaculty
)
router.get('/', AcademicSemesterControllers.getAllAcademicFaculty)
export const academicFacultyRoutes = router

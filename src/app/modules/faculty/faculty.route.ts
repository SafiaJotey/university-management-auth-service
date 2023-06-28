import express from 'express'

import validateRequest from '../../midlewires/validateRequest'
import { FacultyController } from './faculty.controllers'
import { FacultyValidation } from './faculty.validations'

const router = express.Router()

router.get('/:id', FacultyController.getSingleFaculty)
router.get('/', FacultyController.getAllFaculties)

router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFacultyZodSchema),
  FacultyController.updateFaculty
)

router.delete('/:id', FacultyController.deleteFaculty)

export const facultyRoutes = router

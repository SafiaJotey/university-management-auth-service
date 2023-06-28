import express from 'express'
import validateRequest from '../../midlewires/validateRequest'
import { StudentController } from './student.controllers'
import { StudentValidaion } from './student.validation'

const router = express.Router()

router.get('/:id', StudentController.getSingleStudent)
router.patch(
  '/:id',
  validateRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent
)
router.delete(
  '/:id',

  StudentController.deleteStudent
)
router.get(
  '/',

  StudentController.getAllStudents
)
export const studentRoutes = router

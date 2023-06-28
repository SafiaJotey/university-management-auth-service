import express from 'express'

import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { studentRoutes } from '../modules/student/student.route.'
import { UserRoutes } from '../modules/user/user.route'
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route'
const router = express.Router()
const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRoutes,
  },
  {
    path: '/student',
    route: studentRoutes,
  },
]
moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router

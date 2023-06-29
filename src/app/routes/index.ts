import express from 'express'

import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route'
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { studentRoutes } from '../modules/student/student.route.'
import { UserRoutes } from '../modules/user/user.route'
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
  {
    path: '/auth',
    route: AuthRoutes,
  },
]
moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router

import express from 'express'
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.router'
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.router'
import { UserRoutes } from '../modules/user/user.router'
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
]
moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router

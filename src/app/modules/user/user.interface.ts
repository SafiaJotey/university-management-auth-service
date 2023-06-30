// creating interface for users

import { Model, Types } from 'mongoose'
import { IAdmin } from '../admin/admin.interface'
import { IFaculty } from '../faculty/faculty.interface'
import { IStudent } from '../student/student.interface'

export type IUser = {
  id: string
  role: string
  password: string
  needsPasswordChange: boolean
  student?: Types.ObjectId | IStudent
  faculty?: Types.ObjectId | IFaculty
  admin?: Types.ObjectId | IAdmin
}

export type UserModel = {
  isUserExist(
    id: string
  ): Promise<Pick<IUser, 'id' | 'password' | 'role' | 'needsPasswordChange'>>
  isPasswordMatch(givenPassword: string, savePassword: string): Promise<boolean>
} & Model<IUser>

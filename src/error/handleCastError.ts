import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../Interfaces/errorMessageInterface'
import { IgenericErrorResponse } from './../Interfaces/responseInterface'

const handleCastError = (
  error: mongoose.Error.CastError
): IgenericErrorResponse => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid id',
    },
  ]
  const statusCode = 400
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  }
}
export default handleCastError

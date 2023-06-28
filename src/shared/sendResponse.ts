import { Response } from 'express'
import { ISendresponse } from '../Interfaces/sendResponseInterface'

const sendResponse = <T>(res: Response, data: ISendresponse<T>): void => {
  const responseData: ISendresponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || undefined,
    data: data.data || null,
  }

  res.status(data.statusCode).json(responseData)
}

export default sendResponse

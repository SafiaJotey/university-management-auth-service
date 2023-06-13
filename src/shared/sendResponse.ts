import { Response } from 'express'
import { ISendresponse } from '../Interfaces/ISendResponse'

const sendResponse = <T>(res: Response, data: ISendresponse<T>): void => {
  const responseData: ISendresponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    messege: data.messege || null,
    data: data.data || null,
  }

  res.status(data.statusCode).json(responseData)
}

export default sendResponse

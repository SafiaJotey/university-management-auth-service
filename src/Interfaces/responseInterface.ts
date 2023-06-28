import { IGenericErrorMessage } from './errorMessageInterface'

export type IgenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}

export type IGenericRespose<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

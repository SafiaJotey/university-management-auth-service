export type ISendresponse<T> = {
  statusCode: number
  success: boolean
  messege?: string | null
  data?: T | null
}

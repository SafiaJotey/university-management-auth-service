import { SortOrder } from 'mongoose'

export type IPagination = {
  page?: number
  limit?: number
  sortBy?: string | null
  sortOrder?: SortOrder | null
}

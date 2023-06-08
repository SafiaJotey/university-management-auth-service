import cors from 'cors'
import express, { Application, urlencoded } from 'express'
import globalErrorHandler from './app/midlewires/globalErrorHanler'
import { UserRoutes } from './app/modules/users/user.router'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users', UserRoutes)

//testing route
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'orebaabaa erroorr!')
//   // throw new Error('Testing Error')
//   // // next('errroorrr')
//   // Promise.reject(new Error('Unhandled Rejection'))
// })
//global error handler
app.use(globalErrorHandler)

export default app

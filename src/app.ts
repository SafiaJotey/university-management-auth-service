import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, Request, Response, urlencoded } from 'express'
import status from 'http-status'
import globalErrorHandler from './app/midlewires/globalErrorHanler'
import routes from './app/routes'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cookieParser())

//Application routes
app.use('/api/v1/', routes)

//testing route
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'orebaabaa erroorr!')
//   // throw new Error('Testing Error')
//   // // next('errroorrr')
//   // Promise.reject(new Error('Unhandled Rejection'))
// })
// global error handler
app.use(globalErrorHandler)
app.use((req: Request, res: Response) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errormessage: [
      {
        path: req.originalUrl,
        message: 'API not found!',
      },
    ],
  })
  // next()
})

export default app

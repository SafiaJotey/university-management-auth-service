import cors from 'cors'
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express'
import status from 'http-status'
import globalErrorHandler from './app/midlewires/globalErrorHanler'
import routes from './app/routes'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/', routes)

//testing route
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'orebaabaa erroorr!')
//   // throw new Error('Testing Error')
//   // // next('errroorrr')
//   // Promise.reject(new Error('Unhandled Rejection'))
// })
//global error handler
app.use(globalErrorHandler)
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    messege: 'Not found',
    errorMessege: [
      {
        path: req.originalUrl,
        messege: 'API not found!',
      },
    ],
  })
  next()
})

export default app

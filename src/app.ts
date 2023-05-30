import cors from 'cors'
import express, { Application, Request, Response, urlencoded } from 'express'
import usersRoutes from './app/modules/users/users.router'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users', usersRoutes)

//testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app

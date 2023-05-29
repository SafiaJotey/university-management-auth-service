import cors from 'cors'
import express, { Application, Request, urlencoded } from 'express'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.get('/', (req: Request, res: any) => {
  res.send('Hello World!')
})

export default app

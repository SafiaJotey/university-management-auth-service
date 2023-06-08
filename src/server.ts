import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
let server: Server
process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database connected successfully')
    server = app.listen(config.port, () => {
      logger.info(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('database connection failed', error)
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
      })
      process.exit(1)
    } else {
      process.exit(1)
    }
  })
}

bootstrap()
process.on('SIGTERM', () => {
  logger.info('SIGTERM is recieved')
  if (server) {
    server.close()
  }
})

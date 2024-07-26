import { Logger } from 'borgen'
import mysql from 'mysql2'
import { config } from './config/config.js'

const connectDb = async (StartServer) => {
  const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
  })
  connection.connect((error) => {
    if (error) {
      Logger.error({ message: error })
      return
    }
    Logger.info({ message: 'MySQL Connected' })

    StartServer()
  })
}

export default connectDb

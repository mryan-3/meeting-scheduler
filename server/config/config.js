import dotenv from 'dotenv'

dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 5500

export const config = {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  server: {
    port: SERVER_PORT,
  },
}

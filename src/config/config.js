import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_USERNAME = process.env.DB_USERNAME || 'root'
export const DB_PASWORD = process.env.DB_PASWORD || ''
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 3306

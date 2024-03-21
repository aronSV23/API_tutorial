import express from 'express'
import { PORT } from './config/config.js'
import { swaggerDocs } from './config/swagger.js'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
app.use(express.json())

app.use(indexRoutes)

swaggerDocs(app, PORT)

app.use('/api', employeesRoutes)

app.use((req, res, next) => {
  res.status(404).json({ message: 'End point not found' })
})

export default app

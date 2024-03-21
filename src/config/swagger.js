import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

// Basic Meta Informations about our API
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'API tutorial', version: '1.0.0' }
  },
  apis: ['src/routes/employees.routes.js', 'src/routes/index.routes.js']
}

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options)

// Function to setup our docs
export const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Make our docs in JSON format available
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log(
    `Docs are available on http://localhost:${port}/api/docs`
  )
}

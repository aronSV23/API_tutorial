import app from './app.js'
import { PORT } from './config/config.js'
import { swaggerDocs } from './config/swagger.js'

swaggerDocs(app, PORT)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

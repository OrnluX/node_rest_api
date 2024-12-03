import { moviesRouter } from './routes/movies.js'
import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.disable('x-powered-by')
app.use(json())
app.use(corsMiddleware())

app.use('/movies', moviesRouter)

// PORT
const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

require('dotenv').config()

const colors = require('colors')
const express = require('express');
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/api/goals', goalRoutes)
app.use('/api/user', userRoutes)

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`)
})
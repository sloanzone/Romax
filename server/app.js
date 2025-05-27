const express = require('express');
const auth = require('./routes/auth')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
console.log("hello")
app.use('/', auth)

module.exports = app
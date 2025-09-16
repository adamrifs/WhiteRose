const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

const PORT = 7000

app.listen(PORT, () => {
    console.log(`server running succesfull on port ${PORT}`)
})
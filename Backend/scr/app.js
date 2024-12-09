const express = require('express')
const morgan = require('morgan')
const APIRoutes = require('./routes/routes')
const cors = require('cors')

const app = express()

// middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/',APIRoutes)

module.exports = app
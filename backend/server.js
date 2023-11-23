const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.use('/api/ideas', require('./routes/ideaRoutes'))

app.listen(port, () =>console.log(`sexy server started on ${port}`))
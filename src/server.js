const express = require('express')
const routes = require('./router/routes')
require('./config/dbConfig.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3030)
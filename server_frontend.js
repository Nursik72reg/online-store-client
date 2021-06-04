const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 80
let dirpath = path.join(__dirname,'build/')

const app = express()
app.use(express.static(dirpath))
app.get('/*', (req, res) => {
    res.sendFile('index.html', {dirpath})})
app.listen(PORT)


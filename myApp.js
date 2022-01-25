require('dotenv').config()
var express = require('express')
var app = express()
console.log('Hello World')
app.use('/public', express.static(__dirname + '/public'))
var absolutePath = __dirname + '/views/index.html'
console.log(process.env.MESSAGE_STYLE)

app.get('/', (req, res) => res.sendFile(absolutePath))

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({ message: 'HELLO JSON' })
  } else {
    res.json({ message: 'Hello json' })
  }
})
module.exports = app

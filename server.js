const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const contacts = require('./contacts')
require('./database')
require('./seed.js')
const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Address Book API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /contacts
    DELETE /contacts/:id
    POST /contacts { name, email, avatarURL }
  </pre>
  `

  res.send(help)
})

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})

app.get('/contacts', (req, res) => {
  contacts.get(req.token,result=>res.send(result))
})

app.delete('/contacts/:id', (req, res) => {
  contacts.remove(req.token, req.params.id)
})

app.post('/contacts', bodyParser.json(), (req, res) => {
  const { name, email } = req.body

  if (name && email) {
    contacts.add(req.token, req.body,result=>res.send(result))
  } else {
    res.status(403).send({
      error: 'Please provide both a name and email address'
    })
  }
})

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})

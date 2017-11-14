require('dotenv').config()

const express = require('express')
const app = express()
const dal = require('./dal')
const port = process.env.PORT || 5000
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const { propOr, pathOr } = require('ramda')
const checkRequiredFields = require('./lib/check-required-fields')

const resourceRequiredFieldCheck = checkRequiredFields([
  'categoryId',
  'name',
  'formalName',
  'shortDesc',
  'purpose',
  'website',
  'desc'
])
const categoryRequiredFieldCheck = checkRequiredFields([
  'name',
  'shortDesc',
  'desc'
])

app.use(bodyParser.json())

app.get('/', (req, res, next) => res.send('Welcom to the api.'))

app.listen(port, () => console.log('Im up and ready to go on port ', port))

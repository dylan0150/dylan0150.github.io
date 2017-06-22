var express     = require('express')
var bodyParser  = require('body-parser')
var fs          = require('fs')
var uuid        = require('node-uuid')

var path = process.argv[1].split('index.js')[0]

var app = express()
app.use(express.static('site'))
app.use(bodyParser())

app.listen(8080)

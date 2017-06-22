var express     = require('express')
var bodyParser  = require('body-parser')
var fs          = require('fs')
var uuid        = require('node-uuid')
var Client      = require('mariasql')

var c = new Client({
  host: 'localhost',
  user: 'foo',
  password: 'bar'
})

c.query('SHOW DATABASES', function(err, rows) {
  if (err) throw err;
  console.dir(rows);
})

c.end();

var path = process.argv[1].split('index.js')[0]

var app = express()
app.use(express.static('site'))
app.use(bodyParser())

app.listen(8080)

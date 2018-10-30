// const Datastore = require('nedb')
const datastore = require('./xnedb')
const path = require('path')

filename = path.join(__dirname, "demo.json")

const db = new datastore({
  filename: filename,
  autoload: true
});

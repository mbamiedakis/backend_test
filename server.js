const express = require('express')
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
var db


MongoClient.connect('mongodb://michael:michael@ds139262.mlab.com:39262/backend_challenge', (err, database) => {
  
app.listen(3001, function() {
    if (err) return console.log(err)
    db = database
    console.log('listening on 3001')
    console.log('HELLO WORLD')
})
})


//Get request handler
app.get('/', function(req, res) {

  db.collection('fullname').find().toArray((err,result) =>{
      if (err) return console.log(err)
       res.render('index.ejs',{fullname:result})


  })
})

// Post request Handler
app.post('/fullname', (req, res) => {
  db.collection('fullname').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

// Delete request handler
app.delete('/fullname', (req, res) => {
  db.collection('fullname').findOneAndDelete({name: req.body.name},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send({message: 'A 1 deleted'})
  })
})


// Put request handler
app.put('/fullname', (req, res) => {
  db.collection('fullname')
  .findOneAndUpdate({name: 'a'}, {
    $set: {
      name: req.body.name,
      quote: req.body.surname
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
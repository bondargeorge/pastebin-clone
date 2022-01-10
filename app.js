require('dotenv').config();
//use express
const express = require('express');
//handler for reading data from the form
const bodyParser = require('body-parser');
//connection to MongoDB
const MongoClient = require('mongodb').MongoClient;
//start the application
const app = express();
//the connection string db url
const dbUrl = process.env.DB_URL;
//the port that the server is listening to
const PORT = 3000;

MongoClient.connect(dbUrl, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('pastebin-clone-db');
    const pastebinsCollection = db.collection('pastebins');

    //middlewares
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))

    //routes
    app.get('/', (req, res) => {
      db.collection('pastebins').find().toArray()
        .then(results => {
          res.render('index.ejs', { pastebins: results })
        })
        .catch(error => console.error(error))
    });
    app.post('/pastebins', (req, res) => {
        pastebinsCollection.insertOne(req.body)
         .then(result => {
             res.redirect('/')
         })
         .catch(error => {
             console.log(error)
         })
    });
    /*
    app.delete('/pastebins', (req, res) => {
      pastebinsCollection.deleteOne(
        { name: "pastebin" }
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No pastebin to delete')
          }
          res.json('Deleted pastebin')
        })
        .catch(error => console.error(error))
    });
    */
    //create a server that the browser can connect to
    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
  });
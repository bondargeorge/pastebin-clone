require('dotenv').config();
//use express
const express = require('express');
//handler for reading data from the form
const bodyParser = require('body-parser');
//use mongoose
const mongoose = require('mongoose');
//get all the routes
const pastebinRoutes = require('./routes/pastebin-router');
//start the application
const app = express();
//the connection string db url
const dbUrl = process.env.DB_URL;
//the connection to the database
const db = mongoose.connection;
//the port that the server is listening to
const PORT = 3000;

//middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', pastebinRoutes);
app.use(bodyParser.json());
app.use(express.static('public'));

//connect to the database
mongoose.connect(dbUrl);
db.on("error", console.error.bind(console, "Connection error to the Database"));
db.once("open", () => {
  console.log("Database connected!");
});

//create a server that the browser can connect to
app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT: ${PORT}`);
});
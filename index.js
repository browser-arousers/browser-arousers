const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/routes');
require("dotenv").config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.emj0a.mongodb.net/${process.env.mongoDB}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB database connection established successfully!');
})

app.use("/", apiRouter);

app.listen(3000, () => {
    console.log("Online");
});
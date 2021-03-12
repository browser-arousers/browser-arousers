const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const getUsers = require('./lib/getUsers');
// const apiRouter = require('./routes/routes');
const gamesRouter = require('./routes/gamesRouter');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
require("dotenv").config();

app.use(cors({credentials:true, origin: ['http://localhost:3000']}));
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

// app.use("/", apiRouter);
app.use("/games", gamesRouter);
app.use("/users", userRouter);


app.listen(5000, () => {
    console.log("Online");
});
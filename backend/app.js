const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');


// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// mongodb connection
mongoose.connect("mongodb://localhost:27017/nhl");
var db = mongoose.connection;
db.once("open",()=>{
    console.log("db conn loaded")
})

// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })
//
app.use(express.static(__dirname + '/public'));


// const exercisesRouter = require('../backend/routes/exercises');
// const usersRouter = require('../backend/routes/users');
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);
//
// //catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('File Not Found');
//     err.status = 404;
//     next(err);
// });
//
// // error handler
// // define as the last app.use callback
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});




//TODO
// auth
// login/out
// images
// currUser
// middleware








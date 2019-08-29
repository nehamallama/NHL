const express = require('express');
var teamListwPictures = require('../backend/data/teamsPictures')
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
let teamImg = require("./models/teamimg")
var fs = require("fs")
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
var impPath = "./routes/hurricanes.vadapt.767.high.36.png"
mongoose.connect("mongodb://localhost:27017/nhl");
var db = mongoose.connection;
db.once("open",()=>{
    console.log("db conn loaded")
    // var a = new teamImg;
    teamListwPictures.map((element) => {
        console.log(element) //see what this prints, if it prints just one section of json we good so we can add reest to json like we did w this one
        var a = new teamImg;
        a.img.imgData = element.imgData;
        a.img.teamName = element.teamName;
        a.img.contentType = 'image/png';
        a.save(function (err, a) {
            if (err) throw err;

            console.error('saved img to mongo');

        })
    })
    // a.img.data = fs.readFileSync(impPath);
    // a.img.contentType = 'image/png';
    // a.img.id = "Carolina Hurricanes";
    // a.save(function (err, a) {
    //     if (err) throw err;
    //
    //     console.error('saved img to mongo');
    //
    // })

    //can one by one add the images to the db
    // can put all the images into a folder and try to loop through them all
    // can try to find the url of each image with the match params and the teams name as a keywh
    // make a json file with imgpath: and teamName: , import it into this file, loop through the data from the json file, assigning each imgpath
    //and teamName to a key

})

// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var fs = require('fs');
//
// var Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })
//
app.use(express.static(__dirname + '/public'));

const teamImgRoute = require("../backend/routes/teamimg")
app.use("/",teamImgRoute);
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








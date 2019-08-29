// const fs = require("fs");
// var impPath = "./routes/hurricanes.vadapt.767.high.36.png";
// // const path = require('path');
// // const directoryPath = path.join(__dirname);
// // fs.readdir(directoryPath, function (err, files) {
// //     //handling error
// //     if (err) {
// //         return console.log('Unable to scan directory: ' + err);
// //     }
// //     //listing all files using forEach
// //     files.map((element) => {
// //         const TeamListwPictures = [
// //             {
// //                 imgData: fs.readFileSync()
// //                 // path n
// //             }
// //         ]
// //     })
// // })

const fs = require("fs");
var impPath = "./routes/hurricanes.vadapt.767.high.36.png";

const TeamListwPictures = [
    {
        imgData: fs.readFileSync(impPath),
        teamName: "Carolina Hurricanes"

    },
    {
        imgData: fs.readFileSync(impPath),
        teamName: "Carolina Hurricanes"

    },
    {
        imgData: fs.readFileSync(impPath),
        teamName: "Carolina Hurricanes"

    },
    {
        imgData: fs.readFileSync(impPath),
        teamName: "Carolina Hurricanes"

    },
    {
        imgData: fs.readFileSync(impPath),
        teamName: "Carolina Hurricanes"

    },

];

module.exports = TeamListwPictures
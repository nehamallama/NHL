const fs = require("fs");
// var impPath = "./routes/hurricanes.vadapt.767.high.36.png";
var impPath2 = "./routes/";
const path = require('path');
const directoryPath = path.join(__dirname+"/data");
const teamListwPictures = [];

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.map((element) => {
        // console.log(element)
        if (element === "St Louis Blues.png"){
            console.log("BRUH")
        }
        const element_split = element.split('.') //get rid of png extension so we can pass our data
            teamListwPictures.push({imgData: fs.readFileSync(impPath2 + `${element}`), //element is the team name
                teamName: element_split[0]})
    })

})
// // const fs = require("fs");
// // var impPath = "./routes/hurricanes.vadapt.767.high.36.png";
//
// const TeamListwPictures = [
//     {
//         imgData: fs.readFileSync(impPath),
//         teamName: "Carolina Hurricanes"
//
//     },
//     {
//         imgData: fs.readFileSync(impPath),
//         teamName: "Carolina Hurricanes"
//
//     },
//     {
//         imgData: fs.readFileSync(impPath),
//         teamName: "Carolina Hurricanes"
//
//     },
//     {
//         imgData: fs.readFileSync(impPath),
//         teamName: "Carolina Hurricanes"
//
//     },
//     {
//         imgData: fs.readFileSync(impPath),
//         teamName: "Carolina Hurricanes"
//
//     },
//
// ]
module.exports = teamListwPictures;
//picture data
//https://www.foxsports.com/nhl/gallery/31-nhl-team-logos-ranked-bruins-flyers-ducks-sharks-penguins-avalanche-golden-knights-maple-leafs-jets-032217
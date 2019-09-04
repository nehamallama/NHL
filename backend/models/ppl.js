var mongoose = require("mongoose");
var bcrypt = require('bcrypt');

var PplSchema = new mongoose.Schema({
    email: {
        type: String, unique: true
    },
    password: {
        type: String, unique: true
    }
});

// for login
PplSchema.statics.authenticate = function (email, password, callback) {
    Ppl.findOne( { email: email })
        .exec( (error, ppl) => { //when findOne has found one (or not), execute this function.
            if (error) return callback(error); //if there is an error with the query operation itself
            else if (!ppl) {
                let error = new Error('User not found with that email address.');
                error.status = 401;
                return callback(error);
            }
            bcrypt.compare(password, ppl.password, function(err, result){
                if (result === true) return callback(null, ppl);
                if (result === false) {
                    let error = new Error("Incorrect password.");
                    error.status = 401;
                    return callback(error);
                }
            })
        });
};


//             bcrypt.compare(password, user.password, (err, result) => {
//                 if (result === true) return callback(null, user);
//                 if (result === false) {
//                     let error = new Error("Incorrect password.");
//                     error.status = 401;
//                     return callback(error);
//                 }
//             })
//         });
// };
// //if we dont find.. error out
// PplSchema.statics.authenticate = async function(email,password){
//     Ppl.findOne({email:email,password:password},async function (err,obj,next) {
//             if (obj.email === email && obj.password === password) {
//                 console.log(obj.email);
//                 console.log(obj.password);
//                 console.log(email);
//                 console.log(password);
//             }
//             else{
//                 console.log("FUCKING NIGGER");
//             }
//
//     });


// else if(!await Ppl.findOne({email:email})){
//     console.log("black");
//     var err = await new Error("Need to enter a password/email bruh");
//     err.status = 401;
//     throw err && process.kill(process.pid, 'SIGTERM');
//     // var err = new Error("Username not in db");
//     // return await next(err);
//     //process.kill(process.pid, 'SIGTERM')        // process.kill();
//     // var err = new Error("Username not in db");
//     // throw err;
//     // var err = new Error("Username not in db");
//     // return next(err);
// }
// else{
//     var err = new Error("Your password and email dont match breh");
//     return next(err);
// }


//hash our pass
PplSchema.pre("save",function(next){
    var ppl = this;
    bcrypt.hash(ppl.password,10,function(err,hash){
        if (err){
            return next(err);
        }
        ppl.password = hash;
        next();
    })
});

var Ppl = mongoose.model("Ppl", PplSchema);
module.exports = Ppl;
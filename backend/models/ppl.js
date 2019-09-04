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
                console.log("added: " + ppl)
                if (result === true) return callback(null, ppl);
                if (result === false) {
                    let error = new Error("Incorrect password.");
                    error.status = 401;
                    return callback(error);
                }
            })
        });
};
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
var router = require("express").Router();
let Ppl = require("../models/ppl")

router.route('/login').post((req, res,next) => {
    if (req.body.email && req.body.password) {
        console.log("engage auth")
        Ppl.authenticate(req.body.email, req.body.password, function (error, ppl) {
            if (error || !ppl) {
                var err = new Error("Need to enter a password/email bruh");
                err.status = 401;
                return next(err);
            } else {
                // req.session.userId = ppl._id;
                // req.session.name = ppl.name;
                // req.session.email = ppl.email;
                return(ppl)
            }
        });
    }

    else{
        var err = new Error("Need to enter a password/email bruh");
        err.status = 401;
        return next(err);
    }

});

module.exports = router; // why exporting wont work the normal way here is beyond me

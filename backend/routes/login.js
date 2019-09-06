var router = require("express").Router();
let Ppl = require("../models/ppl")

router.route('/login').post((req, res,next) => {
    if (req.body.email && req.body.password) {
        console.log(req.body.email )
        console.log(req.body.password )
        Ppl.authenticate(req.body.email, req.body.password, async function (error, ppl) {
            if (error || !ppl) {
                var err = new Error("Need to enter a password/email bruh");
                err.status = 401;
                return next(err);
            } else {
                const user = req.body.email
                req.session.userId = ppl._id;
                req.session.email = ppl.email;
                console.log(req.session)
                res.send(user)



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

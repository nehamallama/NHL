var router = require("express").Router();
let Ppl = require("../models/ppl")


router.route('/register').post((req, res,next) => {
    console.log('reached post on backend')

    if (req.body.email &&
        req.body.password &&
        req.body.confirmPassword) {
        console.log(req.body.password)

        // confirm that user typed same password twice
        if (req.body.password !== req.body.confirmPassword) {
            var err = new Error('Passwords do not match.');
            err.status = 400;
            return next(err);
        }


        var pplData = {
            email: req.body.email,
            password: req.body.password,
        };
        Ppl.create(pplData, function (error, ppl) {
            if (error) {
                return next(error);
            } else {
                // req.session.userId = ppl._id;
                // req.session.name = ppl.name;

                // cool we could do a redirect to another backend route here once were loaded to get even more ata and then redirect somehwere again in the front end
                res.send("Frig")
            }
        });
    }else{
        var err = new Error("Need to enter a password/email bruh");
        err.status = 401;
        return next(err);
    }
});

module.exports = router; // why exporting wont work the normal way here is beyond me

var express = require('express');

var router = require("express").Router();
var teamImg = require("../models/teamimg")
var fs = require('fs');

// var Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;

router.route('/teams/:team').get((req, res) => {
    const spliiting = req.url.split("/");
    const teamNameForPictureQuery = spliiting[2].replace(/([a-z])([A-Z])/g, '$1 $2');




    teamImg.findOne({"img.teamName": teamNameForPictureQuery },  function(err, img) {
        if (err)
            res.send(err);
        res.contentType('json');
        res.send(img);
    })
});

module.exports = router; // why exporting wont work the normal way here is beyond me

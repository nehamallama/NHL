var express = require('express');

var router = require("express").Router();
var teamImg = require("../models/teamimg")
var fs = require('fs');

// var Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;

router.route('/test').get((req, res) => {
    const hurricanes = "Carolina Hurricanes "
    teamImg.findOne({"img.teamName":"Carolina Hurricanes" },  function(err, img) {
        if (err)
            res.send(err);
        res.contentType('json');
        res.send(img);
    })
});

module.exports = router;

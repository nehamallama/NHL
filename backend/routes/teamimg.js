var express = require('express');

var router = require("express").Router();
var teamImg = require("../models/teamimg")
var fs = require('fs');

// var Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;

router.route('/test').get((req, res) => {
    teamImg.findOne({}, 'img createdAt', function(err, img) {
        if (err)
            res.send(err);
        res.contentType('json');
        res.send(img);
    }).sort({ createdAt: 'desc' });
});

module.exports = router;

/**
 * Created by daniel.neumann on 6/6/15.
 */
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tinyverse = require('../models/TinyVerse.js');

/* GET random tinyverse listing. */
router.get('/', function(req, res, next) {
    console.log("GET called");

    Tinyverse.find(function (err, tinyverses) {
        if (err) return next(err);
        res.json(tinyverses);
    });
});



module.exports = router;

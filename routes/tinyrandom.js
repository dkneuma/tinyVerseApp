/**
 * Created by daniel.neumann on 6/6/15.
 */
var express = require('express');
var router = express.Router();
var versecount = 0;

var mongoose = require('mongoose');
var Tinyverse = require('../models/TinyVerse.js');

/* GET random tinyverse listing. */
router.get('/', function(req, res, next) {
    console.log("GET called");

    // First, get count of records
    Tinyverse.count(function (err, count) {
        if (err) return next(err);
        console.log('there are %d tiny verses', count);
        versecount = count;
    });

    /* Then figure out how to do this:

     Tinyverse.find().limit(-1).skip(Math.random() * versecount);

     */
    Tinyverse.find(null,null,{limit: -1, skip : Math.random() * versecount},function (err, tinyverses) {
        console.log('there are STILL %d tiny verses', versecount);
        if (err) return next(err);
        res.json(tinyverses);
    });
});



module.exports = router;

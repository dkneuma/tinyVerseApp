var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tinyverse = require('../models/TinyVerse.js');



/* GET tinyverses listing. */
router.get('/', function(req, res, next) {
    console.log("GET called");
    Tinyverse.find(function (err, tinyverses) {
        if (err) return next(err);
        res.json(tinyverses);
    });
});

/* POST /tinyverses */
router.post('/', function(req, res, next) {
    Tinyverse.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /tinyverses/id */
router.get('/:id', function(req, res, next) {
    Tinyverse.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /tinyverses/id */

router.delete('/:id', function(req, res, next) {
    console.log("called delete on " + req.params.id)
    Tinyverse.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /tinyverses/:id */
router.put('/:id', function(req, res, next) {
    Tinyverse.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = router;

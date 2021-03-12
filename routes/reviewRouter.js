const { request } = require('express');
const express = require('express');
const router = express.Router();
const Review = require("../models/review");

// using the landing page should be fine
//could be /post but could be unnecessary
router.get('/', (req, res) => {
    Review.find({}, (err, reviews) => {
        if (err) {
            console.log(err);
            res.status(500).json({ "msg": err });
        } else {
            res.status(200).json(reviews);
        }
    });
});


//need to have a post for adding a new review to the database
//should have user information and a timestamp but not sure on how
router.post('/addreview', (req, res) => {
    console.log("got here");
        const text = req.body.body;
        const title = req.body.title;
        const score = req.body.score;
        const ageRange = req.body.ageRange;
        const timestamp = req.body.timestamp;
        new Review({"body":text, "title":title, "score":score, "ageRange":ageRange, "timestamp":timestamp}).save((err, obj) => {
            if (err) {
                res.status(500).json({ "msg": err});
            } else {
                res.status(200).json(obj);
            }
        });
});

//need a .delete for deleting a post 
router.delete('/:review', (req, res) => {
    Review.deleteOne({ "review": req.params.review }, (err, obj) => {
        if (err) {
            console.log(err);
            res.status(500).json({ "msg": err });
        } else {
            res.status(200).json(obj);
        }
    });
});
module.exports = router;
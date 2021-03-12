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

router.post('/', (req, res) => {
    Review.find({}, (err, reviews) => {
        if (err) {
            console.log(err);
            res.status(500).json({ "msg": err });
        } else {
            res.status(200).json(reviews);
        }
    });
});

//need to have a post for adding a new user to the database
//should have user information and a timestamp but not sure on how
router.post('/addreview', (req, res) => {
    console.log("got here");
        let newReview = req.body.Review;
        let review = new Review({review:newReview});
        review.save();
});

//need a .delete for deleting a post 
// router.delete('/:name', (req, res) => {
//     User.deleteOne({ "name": req.params.name }, (err, obj) => {
//         if (err) {
//             console.log(err);
//             res.status(500).json({ "msg": err });
//         } else {
//             res.status(200).json(obj);
//         }
//     });
// });
module.exports = router;
const express = require('express');
const router = express.Router();
const Review = require('../models/review');

router.get('/:field/:data', (req,res) => {
    Review.find({[req.params.field]: req.params.data}, (err, obj) => {
        if(err) {
            console.log(err);
            res.status(500).json({"msg": err});
          } else {
            res.status(200).json(obj);
          }
    });
});

router.post('/',(req,res) => {
    const data={"body": req.body.body, "title": req.body.title, "author": req.body.author, "cover": req.body.cover};
    new Review(data).save((err,obj) =>{
        if(err) {
              res.status(500).json({"msg": err});
            } else {
              res.status(200).json(obj);
            }
      });
  });

router.get('/',(req,res) => {
    Review.find({}, (err, obj) => {
        if(err) {
            console.log(err);
            res.status(500).json({"msg": err});
          } else {
            res.status(200).json(obj);
          }
    });
});

module.exports = router;


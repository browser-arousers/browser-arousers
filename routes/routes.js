const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.get('/:name',(req,res) => {
    User.find({"name": req.params.name}, (err, obj) => {
        if(err) {
            console.log(err);
            res.status(500).json({"msg": err});
          } else {
            res.status(200).json(obj);
          }
    });
});
router.post('/',(req,res) => {
    const data ={"name": req.body.name, "email": req.body.email, "password": req.body.password};
    new User(data).save((err, obj) => {
        if(err) {
          res.status(500).json({"msg": err});
        } else {
          res.status(200).json(obj);
        }
    });
});
router.delete('/:name',(req,res) => {
    User.deleteOne({"name": req.params.name}, (err,obj) => {
        if(err) {
            console.log(err);
            res.status(500).json({"msg": err});
          } else {
            res.status(200).json(obj);
          }
    });
});

module.exports = router;
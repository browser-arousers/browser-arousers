const { request } = require('express');
const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    User.find({}, (err, obj) => {
        if (err) {
            console.log(err);
            res.status(500).json({ "msg": err });
        } else {
            res.status(200).json(obj);
        }
    });
});
router.post('/login', (req, res) => {
    res.status(200).json({ "msg": "online, working" })
});

router.post('/register', (req, res) => {
    if (req.body.password === req.body.passwordverify) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            const data = { "name": req.body.name, "email": req.body.email, "password": hash };
            new User(data).save((err, obj) => {
                if (err) {
                    res.status(500).json({ "msg": err });
                } else {
                    res.status(200).json(obj);
                }
            });
            // res.status(200).json({ "msg": "all good", data: { name: req.body.name, email: req.body.email, hash: hash } })
        });
    } else {
        res.status(401).json({ "msg": "passwords dont match" })
    }

});

router.delete('/:name', (req, res) => {
    User.deleteOne({ "name": req.params.name }, (err, obj) => {
        if (err) {
            console.log(err);
            res.status(500).json({ "msg": err });
        } else {
            res.status(200).json(obj);
        }
    });
});
module.exports = router;
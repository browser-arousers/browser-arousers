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
    // if pw input === pw stored in DB, allow login?
    // else - error - "PW dont match"
});

router.post('/register', (req, res) => {
    console.log("got here");
    if (req.body.password === req.body.passwordCheck) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            const data = { "username": req.body.username, "email": req.body.email, "password": hash, "passwordCheck":hash};
            new User(data).save((err, obj) => {
                if (err) {
                    res.status(500).json({ "msg": err });
                } else {
                    res.status(200).json(obj);
                }
            });
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
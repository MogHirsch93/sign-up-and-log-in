var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/userinfo.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign up' });
});

router.post('/',function(req,res){
  var newUser = new User({
    "name": req.body.name,
    "email": req.body.email,
    "password": req.body.password
  });

  newUser.save().then(item => {
    res.redirect("/");
  }).catch(err => {
    res.status(400).send("unable to save user info");
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/userinfo.js");

router.get('/', function(req,res){

  var email = req.query.email;
  var password= req.query.password

  User.find({email: email}, function(err,user){
    console.log(user);
    if(password == user[0].password){
        return res.render("home",{name: user[0].password})
    }
    res.send(err);
  })
});

module.exports = router

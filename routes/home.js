var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/userinfo.js");

router.get('/', function(req,res){

  var email = req.query.email;
  var password= req.query.password

  User.find({email: email}, function(err,user){

    if(password == user[password]){
        return res.render("home",{name: user.name})
    }
    res.send(err);
  })
});

module.exports = router

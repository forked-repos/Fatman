var express = require('express');
var router = express.Router();

var User = require("./../models/user");

/* GET users listing. */
router.get('/', function(req, res) {
  User.find(function(err, users){
    res.send(users);
  });
});

router.get("/put/:username", function(req, res){
  var user = new User({
    name: req.params.username
  });

  user.save(function(err){
    if (err) 
      console.log(err);
    else
      console.log("successfully saved to database");
  });
});

router.get('/:username', function(req, res){
  User.findOne({name: req.params.username}, function(err, user){
    if (err){
      console.log(err);
      res.send("no user");
    }else{
      res.send(user);
    }

  });
});

router.get('/delete/:username', function (req, res) {
  User.remove({name: req.params.username}, function(err, user){
    if (err) 
      console.log(err);
    else
      res.redirect('/users');
  });
});

module.exports = router;

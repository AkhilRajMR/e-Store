'use strict';


var mongoose = require('mongoose'),
Member = mongoose.model('Members');

exports.list_all_members = function(req, res) {
    Member.find({}, function(err, member) {
    if (err)
      res.send(err);
    res.json(member);
  });
};




exports.create_a_member = function(req, res) {
  var new_member = new Member(req.body);
  console.log("new_member", new_member);
  new_member.save(function(err, member) {
    if (err)
      res.send(err);
    res.json(member);
  });
};


exports.read_a_member = function(req, res) {
    Member.findById(req.params.memberId, function(err, member) {
    if (err)
      res.send(err);
    res.json(member);
  });
};


exports.update_a_member = function(req, res) {
    Member.findOneAndUpdate({_id: req.params.memberId}, req.body, {new: true}, function(err, member) {
    if (err)
      res.send(err);
    res.json(member);
  });
};


exports.delete_a_member = function(req, res) {
    Member.remove({
    _id: req.params.memberId
  }, function(err, member) {
    if (err)
      res.send(err);
    res.json({ message: 'Member successfully deleted' });
  });
};

exports.authenticate = function(req, res) {
    Member.findOne({membername: req.body.membername}, function(err, member) {
        if (err) {
            res.send(err);
        }
        console.log("member => ", member);
        res.json(member);
      });
  };
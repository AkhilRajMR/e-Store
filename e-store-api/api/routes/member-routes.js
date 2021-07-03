'use strict';
module.exports = function(app) {
  var memberController = require('../controllers/member-controller');

  // login routes
  app.route('/member')
    .post(memberController.create_a_member);

  // memberController Routes
  app.route('/members')
    .get(memberController.list_all_members);


  app.route('/member/:memberId')
    .get(memberController.read_a_member)
    .put(memberController.update_a_member)
    .delete(memberController.delete_a_member);
};
'use strict';
module.exports = function(app) {
  var userController = require('../controllers/user-controller');
  var memberController = require('../controllers/member-controller');

  // login routes
  app.route('/auth')
    .post(userController.authenticate);

  // userController Routes
  app.route('/users')
    .get(userController.list_all_users)
    .post(userController.create_a_user);


  app.route('/user/:userId')
    .get(userController.read_a_user)
    .put(userController.update_a_user)
    .delete(userController.delete_a_user);

    app.route('/member')
      .post(memberController.create_a_member);
  
    app.route('/members')
      .get(memberController.list_all_members);
  
  
    app.route('/member/:memberId')
      .get(memberController.read_a_member)
      .put(memberController.update_a_member)
      .delete(memberController.delete_a_member);
};
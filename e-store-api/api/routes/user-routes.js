'use strict';
module.exports = function(app) {
  var userController = require('../controllers/user-controller');

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
};
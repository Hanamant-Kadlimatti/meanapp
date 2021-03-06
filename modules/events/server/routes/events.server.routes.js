'use strict';

module.exports = function (app) {
  // Root routing
  var event = require('../controllers/events.server.controller');

  app.route('/eventload').get(event.load);

  app.route('/events').get(event.list);

  app.route('/event').post(event.create);

};
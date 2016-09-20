'use strict';

const service = require('feathers-sequelize');
const client = require('./client-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: client(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/clients', service(options));

  // Get our initialize service to that we can bind hooks
  const clientService = app.service('/clients');

  // Set up our before hooks
  clientService.before(hooks.before);

  // Set up our after hooks
  clientService.after(hooks.after);
};

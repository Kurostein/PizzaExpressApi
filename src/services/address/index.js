'use strict';

const service = require('feathers-sequelize');
const address = require('./address-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: address(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/addresses', service(options));

  // Get our initialize service to that we can bind hooks
  const addressService = app.service('/addresses');

  // Set up our before hooks
  addressService.before(hooks.before);

  // Set up our after hooks
  addressService.after(hooks.after);
};

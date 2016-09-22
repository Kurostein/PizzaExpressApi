'use strict';

// order-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const order = sequelize.define('orders', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    district: {
      type: Sequelize.STRING,
      allowNull: false
    },
    complement: {
      type: Sequelize.STRING,
      allowNull: false
    },
    product: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  order.sync();

  return order;
};

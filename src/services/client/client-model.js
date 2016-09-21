'use strict';

// client-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');
const user = require('../user/user-model');

module.exports = function(sequelize) {
  const client = sequelize.define('clients', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    street: {
      type: Sequelize.STRING,
      allowNull: false
    },
    number: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cep: {
      type: Sequelize.STRING,
      allowNull: false
    },
    district: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  var userObj = user(sequelize);
  client.belongsTo(userObj, { foreignKey: 'userId', targetKey: 'id'});

  client.sync();

  return client;
};

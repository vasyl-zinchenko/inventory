// const {
//   Model,
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Orders extends Model {
//     static associate(models) {
//     }
//   }

//   Orders.init({
//     title: DataTypes.STRING,
//     description: DataTypes.STRING,
//     date: DataTypes.DATE,
//   }, {
//     sequelize,
//     modelName: 'orders',
//   });

//   return Orders;
// };

import {sequelize} from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Orders = sequelize.define('Orders', {

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

}, {
  tableName: 'orders',
  updatedAt: false,
  createdAt: false,
});

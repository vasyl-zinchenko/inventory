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

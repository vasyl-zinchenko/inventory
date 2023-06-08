import {sequelize} from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Products = sequelize.define('Products', {

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  isNew: {
    type: DataTypes.INTEGER,
    field: 'is_new',
    allowNull: false,
  },

  serialNumber: {
    type: DataTypes.STRING,
    field: 'serial_number',
    allowNull: false,
  },

  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  specification: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  guarantee: {
    type: DataTypes.JSONB,
    allowNull: false,
  },

  price: {
    type: DataTypes.JSONB,
    allowNull: false,
  },

  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

}, {
  tableName: 'products',
  updatedAt: false,
  createdAt: false,
});

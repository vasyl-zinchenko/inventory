// const {
//   Model,
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Products extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }

//   Products.init({
//     serialNumber: DataTypes.INTEGER,
//     isNew: DataTypes.INTEGER,
//     photo: DataTypes.STRING,
//     title: DataTypes.STRING,
//     type: DataTypes.STRING,
//     specification: DataTypes.STRING,
//     guarantee: DataTypes.STRING,
//     price: DataTypes.STRING,
//     order: DataTypes.INTEGER,
//     date: DataTypes.DATE,
//   }, {
//     sequelize,
//     modelName: 'products',
//   });

//   return Products;
// };


import {sequelize} from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Products = sequelize.define('Products', {

  title: {
    serialNumber: DataTypes.INTEGER,
    allowNull: false,
  },

  isNew: {
    type: DataTypes.INTEGER,
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

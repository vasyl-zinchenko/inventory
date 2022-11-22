const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Products.init({
    serialNumber: DataTypes.INTEGER,
    isNew: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    specification: DataTypes.STRING,
    guarantee: DataTypes.STRING,
    price: DataTypes.STRING,
    order: DataTypes.INTEGER,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'products',
  });

  return Products;
};

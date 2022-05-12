'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book_list.init({
    user_id: DataTypes.INTEGER,
    allowNull: false,
    book_id: DataTypes.INTEGER,
    allowNull: false,
    read: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Book_list',
    tableName: 'book_list'
  });
  return Book_list;
};
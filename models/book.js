'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Book.hasMany(models.Comment, {
        foreignKey: 'book_id',
        as: 'book',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Book.init({
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    author: DataTypes.STRING, allowNull: false,
    published_date: DataTypes.STRING, allowNull: false,
    book_link: DataTypes.STRING, allowNull: false
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'book'
  });
  return Book;
};
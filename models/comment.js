'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Comment.belongsTo(models.Book, {
        foreignKey: 'book_id',
        as: 'book',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Comment.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: {
      type: DataTypes.STRING
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'book_id',
      onDelete: 'CASCADE',
      references: {
        model: 'book',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'book_id',
      onDelete: 'CASCADE',
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comment'

  });
  return Comment;
};
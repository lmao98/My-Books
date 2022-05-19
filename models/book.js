"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Book.hasMany(models.Comment, {
        foreignKey: "comment_id",
        as: "comment",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Book.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      published_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      book_link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        onDelete: "CASCADE",
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Book",
      tableName: "book",
    }
  );
  return Book;
};

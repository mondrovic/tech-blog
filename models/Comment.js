const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// sets up Comment model class
class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  // makes sure there's at least one char to prevent blank comments
  comment_body: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1],
    },
  },
  // references user table
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  // references post table
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "post",
      key: "id",
    },
  },
});

module.exports = Comment;

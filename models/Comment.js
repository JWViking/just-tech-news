const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model {}

Comment.init(
  {
     id:{ 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
    comment_text:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{
                        len: [4]
                    }
                },
    user_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                model: 'user',
                key: 'id', 
            },
    post_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                model: 'post',
                key: 'id'
            }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;

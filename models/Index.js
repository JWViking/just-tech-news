const User = require('./User');
const Post = require("./Post");
const Vote = require ("./Vote");

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Post, {
    //this is how the User and Post models are connected. It is through the Vote model.
    through: Vote,
    //name that Vote is to be displayed as to be more informative.
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };
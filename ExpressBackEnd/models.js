const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "foodstagram_db",
  dialect: "postgres",
  define: {
    underscored: true
  }
});

class Post extends Sequelize.Model {}

Post.init(
  {
    title: Sequelize.STRING,
    image_url: Sequelize.TEXT,
    description: Sequelize.TEXT,
    location: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "post"
  }
);

class User extends Sequelize.Model {}

User.init(
  {
    username: Sequelize.STRING,
    password_digest: Sequelize.STRING,
    usertag: Sequelize.TEXT,
    image_url: Sequelize.TEXT,
    description: Sequelize.TEXT,
    email: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "user"
  }
);

class Comment extends Sequelize.Model {}

Comment.init(
  {
    comment: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "comment"
  }
);

User.hasMany(Post, { onDelete: "cascade" });
Post.belongsTo(User);
User.hasMany(Comment, { onDelete: "cascade" });
Post.hasMany(Comment, { onDelete: "cascade" });
Comment.belongsTo(Post);
Comment.belongsTo(User);

module.exports = {
  Post,
  User,
  Comment,
  sequelize
};

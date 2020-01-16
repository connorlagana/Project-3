const { User, Post, Comment } = require("./models");

const seed = async () => {
  await User.destroy({ where: {} });
  await Post.destroy({ where: {} });
  await Comment.destory({ where: {} });

  process.exit();
};

seed();

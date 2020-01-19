const { User, Post, Comment } = require("./models");

const seed = async () => {
  await User.destroy({ where: {} });
  await Post.destroy({ where: {} });
  await Comment.destroy({ where: {} });

  const admin = await User.create({
    username: "admin",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "admin@admin.com",
    description: "I am the admin, and you will do as I say",
    image_url:
      "https://townsquare.media/site/555/files/2012/11/bill-gates.jpg?w=980&q=75",
    usertag: "@admin",
    followers: [1, 2, 3, 4]
  });

  const nadine = await User.create({
    username: "nadine",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "nadine.visser@gmail.com",
    description: "I am hot ❤️",
    image_url:
      "https://instagram.fbos1-2.fna.fbcdn.net/v/t51.2885-15/e35/c0.84.1440.1440a/s480x480/80639098_2970545682967133_2054395431913772393_n.jpg?_nc_ht=instagram.fbos1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=-dqkfokiFFwAX__P5dE&oh=9b9703f3bd1170212fbfa077fce9ac98&oe=5EA76728",
    usertag: "@nadje",
    followers: [1, 2, 3, 4]
  });

  const connor = await User.create({
    username: "connor",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "connor.lagana@gmail.com",
    description:
      "Whattup! I'm connor and I lay the pipe whilst also getting this bread",
    image_url: "https://imgur.com/SIpJ5PD.jpg",
    usertag: "@conner_420", 
    followers: [1, 2, 3, 4]
  });
  const Braam = await User.create({
    username: "Braam",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "braam.lagana@gmail.com",
    description:
      "im a braam burg",
    image_url: "https://yt3.ggpht.com/a-/ACSszfF5P8d6gG0CFd25XJ1t-XhKv0EfR7u5uTMPlA=s900-mo-c-c0xffffffff-rj-k-no",
    usertag: "@dutcherian",
    followers: [1, 2, 3, 4]
  });
  const ray = await User.create({
    username: "ray",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "ray.lagana@gmail.com",
    description:
      "easy peasy",
    image_url: "https://bayfield.ca/wp-content/uploads/2018/10/Raymond-Yen-215x300.jpg",
    usertag: "@marvelHero",
    followers: [1, 2, 3, 4]
  });

  const post1 = await Post.create({
    title: "I'm sexy and I know it",
    image_url:
      "https://images3.persgroep.net/rcs/Dt5HE3-2-L_njPjDgI20vMWf4vw/diocontent/155924555/_fitwidth/1240?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.9",
    description:
      "I'm feeling great today. I'm holding my national flag and just ran the fastest sprint in my life. Also, I think Connor should give me a call. I can't wait to meet him.",
    location: "New York, US"
  });

  const post2 = await Post.create({
    title: "I'm Freaking Bad-Ass Ray Donovan!",
    image_url: "https://cdn1-www.comingsoon.net/assets/uploads/2018/08/Ray-Donovan.jpg",
    description: "If you need a fixer for your problems, give me a call...",
    location: "New York, US"
  })

  await nadine.addPost(post1);
  await Braam.addPost(post2);

  const comment1 = await Comment.create({
    comment:
      "Hi Connor here! I adore you! I think you're the best! Please accept my friend invite on Foodstagram!"
  });

  const comment2 = await Comment.create({
    comment: "You're a bloody legend mate!"
  })

  await post1.addComment(comment1);
  await connor.addComment(comment1);
  await post2.addComment(comment2);
  await Braam.addComment(comment2);

  process.exit();
};

seed();

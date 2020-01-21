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

  const serena = await User.create({
    username: "serena",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "serena@gmail.com",
    description:
      "My name is serena williams and i play tennis and i love life and i love surfing because surfing is cool and i love connor because he is my bestfriend",
    image_url:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/12/11/Serena-Williams.jpg?w390",
    usertag: "@serena_williams",
    followers: [1, 2]
  });

  const elon = await User.create({
    username: "Rocket Man Musk",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "elon@gmail.com",
    description:
      "I send rockets to space and i also make electric vehicles with my super big brain and i make tweets that are funny plz follow me on foodstagram",
    image_url:
      "data:image/jpeg;base64,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",
    usertag: "@papa_musk",
    followers: [1, 2]
  });

  const genghis = await User.create({
    username: "Genghis Khan",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "khan@gmail.com",
    description: "My name is genghis",
    image_url:
      "https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTIwNjA4NjMzODc3MTM2OTA4/kublai-khan-wc-9369657-1-402.jpg",
    usertag: "@GenghIsInTheHouse",
    followers: [1, 2, 3]
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
    description: "im a braam burg",
    image_url:
      "https://yt3.ggpht.com/a-/ACSszfF5P8d6gG0CFd25XJ1t-XhKv0EfR7u5uTMPlA=s900-mo-c-c0xffffffff-rj-k-no",
    usertag: "@dutcherian",
    followers: [1, 2, 3, 4]
  });
  const ray = await User.create({
    username: "ray",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "ray.lagana@gmail.com",
    description: "easy peasy",
    image_url:
      "https://bayfield.ca/wp-content/uploads/2018/10/Raymond-Yen-215x300.jpg",
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
    image_url:
      "https://cdn1-www.comingsoon.net/assets/uploads/2018/08/Ray-Donovan.jpg",
    description: "If you need a fixer for your problems, give me a call...",
    location: "New York, US"
  });

  await nadine.addPost(post1);
  await Braam.addPost(post2);

  const comment1 = await Comment.create({
    comment:
      "Hi Connor here! I adore you! I think you're the best! Please accept my friend invite on Foodstagram!"
  });

  const comment2 = await Comment.create({
    comment: "You're a bloody legend mate!"
  });

  await post1.addComment(comment1);
  await connor.addComment(comment1);
  await post2.addComment(comment2);
  await Braam.addComment(comment2);

  process.exit();
};

seed();

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
      "https://townsquare.media/site/555/files/2012/11/bill-gates.jpg?w=980&q=75"
  });

  const nadine = await User.create({
    username: "nadine",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "nadine.visser@gmail.com",
    description: "I am hot ❤️",
    image_url:
      "https://instagram.fbos1-2.fna.fbcdn.net/v/t51.2885-15/e35/c0.84.1440.1440a/s480x480/80639098_2970545682967133_2054395431913772393_n.jpg?_nc_ht=instagram.fbos1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=-dqkfokiFFwAX__P5dE&oh=9b9703f3bd1170212fbfa077fce9ac98&oe=5EA76728"
  });

  const connor = await User.create({
    username: "connor",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "connor.lagana@gmail.com",
    description:
      "Whattup! I'm connor and I lay the pipe whilst also getting this bread",
    image_url: "https://imgur.com/SIpJ5PD.jpg"
  });
  const Braam = await User.create({
    username: "Braam",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "braam.lagana@gmail.com",
    description:
      "im a braam burg",
    image_url: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjPop_xxIvnAhV0Ap0JHTrpCTAQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.apple.com%2F&psig=AOvVaw07Pj4KA8yt01L5chTe1mwa&ust=1579381543381185"
  });
  const ray = await User.create({
    username: "ray",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "ray.lagana@gmail.com",
    description:
      "easy peasy",
    image_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.facilityexecutive.com%2Fwp-content%2Fuploads%2F2019%2F10%2FThumbs.Up_-503x300.jpg&imgrefurl=https%3A%2F%2Ffacilityexecutive.com%2F2019%2F10%2Ffriday-funny-go-ahead-give-your-boss-a-thumbs-up%2F&docid=UKLkJjJdf-T4PM&tbnid=V5czkcw_vsIX-M%3A&vet=10ahUKEwi4xPWoxYvnAhXJqlkKHTgmDBwQMwiBASgEMAQ..i&w=503&h=300&bih=723&biw=619&q=thumbs%20up&ved=0ahUKEwi4xPWoxYvnAhXJqlkKHTgmDBwQMwiBASgEMAQ&iact=mrc&uact=8"
  });

  const post1 = await Post.create({
    title: "I'm sexy and I know it",
    image_url:
      "https://images3.persgroep.net/rcs/Dt5HE3-2-L_njPjDgI20vMWf4vw/diocontent/155924555/_fitwidth/1240?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.9",
    description:
      "I'm feeling great today. I'm holding my national flag and just ran the fastest sprint in my life. Also, I think Connor should give me a call. I can't wait to meet him.",
    location: "New York, US"
  });

  await nadine.addPost(post1);

  const comment1 = await Comment.create({
    comment:
      "Hi Connor here! I adore you! I think you're the best! Please accept my friend invite on Foodstagram!"
  });

  await post1.addComment(comment1);
  await connor.addComment(comment1);

  process.exit();
};

seed();

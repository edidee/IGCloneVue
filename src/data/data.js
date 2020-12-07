const assets = require.context("../assets", true, /\.jpg$/);

const data_post = [
  {
    profile_name: "gifty_bebe",
    profileImage: assets("./profile-pic.jpg"),
    postImage: assets("./pizza.jpg"),
    caption: "Pizza is life",
    Like: true,
    numberOfLikes: 250,
    numberOfComment: 365,
  },

  {
    profile_name: "_girldee",
    profileImage: assets("./profile-pic.jpg"),
    postImage: assets("./image-4.jpg"),
    caption: "You cant have it anyother way",
    Like: false,
    numberOfLikes: 3000,
    numberOfComment: 365,
  },

  {
    profile_name: "gorg_mfon",
    profileImage: assets("./profile-pic.jpg"),
    postImage: assets("./image-2.jpg"),
    caption: "Such a beaut",
    Like: false,
    numberOfLikes: 300,
    numberOfComment: 365,
  },

  {
    profile_name: "utibay",
    profileImage: assets("./profile-pic.jpg"),
    postImage: assets("./image-5.jpg"),
    caption: "Ice-creame, anyone?",
    Like: true,
    numberOfLikes: 1500,
    numberOfComment: 365,
  },
];

export default data_post;

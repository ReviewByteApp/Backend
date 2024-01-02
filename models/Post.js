const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
  },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;

const mongoose = require("mongoose");
const PostModel = mongoose.Schema;
const User = require("./user.model");

const postSchema = new PostModel(
  {
    postName: {
      type: String,
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },

    post: {
      photo: {
        type: String,
      },
      video: {
        type: String,
      },
    },

    cloudinary_id: {
      type: String,
      required: true,
    },

    likes: {
      type: Array,
    },

    comments: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);

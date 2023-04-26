const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const expressAsyncHandler = require("express-async-handler");
const User = require("./models/user.model");
const data = require("./data");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");
const { protect } = require("./middlewares/auth");

connectDB();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

// Generate token
const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

// Seeding routes
app.get(
  "/seed/users",
  expressAsyncHandler(async (req, res) => {
    const userExists = await User.findOne(data.users.email);

    if (!userExists) {
      const user = await User.insertMany(data.users);
      return res.send(user);
    } else {
      return res.send("Email already exists!");
    }
  })
);

// Signup user
app.post("/user/signup", async (req, res) => {
  const { ...userData } = req.body;
  if (
    !userData.username ||
    !userData.password ||
    !userData.fullname ||
    !userData.number
  ) {
    return res.status(401).send({ message: "All credentials are required!" });
  } else {
    // Check if the user already exists
    const { username, fullname, number, password } = userData;
    try {
      const userExists = await User.findOne({ username });
      if (userExists) {
        return res.status(401).send({ message: "Username already taken!" });
      } else {
        try {
          const user = await User.create({
            username,
            fullname,
            password: bcrypt.hashSync(password),
            number,
          });

          return res.send({
            username,
            fullname,
            number,
            token: generateToken(user),
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
});

// Login user
app.post("/user/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).send({ message: "All credentials are required!" });
  } else {
    try {
      // check the credentials
      const userExists = await User.findOne({ username });
      if (userExists && (await bcrypt.compare(password, userExists.password))) {
        return res.send({
          fullname: userExists.fullname,
          username,
          number: userExists.number,
          token: generateToken(userExists),
          photo: userExists.photo,
        });
      } else {
        return res.status(401).send({ message: "Invalid email or password!" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
});

// Upload a profile picture using multer
app.post("/upload", protect, async (req, res) => {
  try {
    if (!req.files) {
      return res.status(401).send({ message: "Please upload a picture" });
    } else {
      const photo = req.files.photo;
      if (!photo.mimetype.startsWith("image")) {
        return res.status(401).send({ message: "Please upload a photo file" });
      } else {
        const ext = photo.name.split(".")[1];
        photo.name = `${req.user.username}_profile.${ext}`;

        let profilePic = await cloudinary.uploader.upload(photo.tempFilePath);
        if (!profilePic) {
          return res.status(500).send({ message: "Internal server error" });
        } else {
          const body = {
            photo: profilePic.secure_url,
            cloudinary_id: profilePic.public_id,
          };

          profilePic = await User.findByIdAndUpdate(req.user._id, {
            photo: body.photo,
            cloudinary_id: body.cloudinary_id,
          });

          if (!profilePic) {
            return res.status(401).send({ message: "Not updated!" });
          } else {
            return res.status(201).send({ message: profilePic });
          }
        }
      }
    }
  } catch (error) {
    res.status(401).send({ message: "Please upload a picture" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`);
});

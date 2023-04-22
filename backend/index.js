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

connectDB();

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
    return res.send({ message: "All credentials are required!" });
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
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
});

// Login user
app.post("/user/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.send({ message: "All credentials are required!" });
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
        });
      } else {
        return res.status(401).send({ message: "Invalid email or password!" });
      }
    } catch (error) {
      console.log(error);
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`);
});

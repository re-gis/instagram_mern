const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const cors = require('cors')
const expressAsyncHandler = require('express-async-handler')

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

// Seeding routes
    app.get(
      "seed/users",
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

app.get('/users', (req, res) => {
    return res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`);
});

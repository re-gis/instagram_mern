const mongoose = require("mongoose");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedToken._id).select("-password");
      next();
    } else {
      return res.status(401).send({ message: "Access denied" });
    }

    if (!token) {
      return res.status.send({ message: "Access denied!" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  protect,
};

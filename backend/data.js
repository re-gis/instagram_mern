const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      name: "Regis",
      email: "regisirumva2006@gmail.com",
      number: 0727155252,
      password: bcrypt.hashSync("12345"),
    },
  ],
};


module.exports = data
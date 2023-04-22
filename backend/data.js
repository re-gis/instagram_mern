const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      username: 'regis',
      password: bcrypt.hashSync('12345'),
      fullname: 'Irumva Regis',
      number: '0786430853',
    },
  ],
};


module.exports = data
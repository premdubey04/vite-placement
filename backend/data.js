
const bcrypt = require("bcryptjs");

let users = [
  {
    id: 1,
    email: "viewer@vite.co.in",
    passwordHash: bcrypt.hashSync("pass123", 8),
    role: "viewer",
  }
];

module.exports = { users };

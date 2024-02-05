const express = require("express");
const { Register, Login } = require("../Controller/Controller");
const {
  Register_Validation,
  Validation,
  Login_Validation,
} = require("../Middleware/Validation");
const { IsAuth } = require("../Middleware/IsAuth");
const User_Router = express.Router();

User_Router.post("/Register", Register_Validation, Validation, Register);
User_Router.post("/Login", Login_Validation, Validation, Login);
User_Router.get("/GetUser", IsAuth, GetCurrent);

module.exports = User_Router;

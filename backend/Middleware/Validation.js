const { body, validationResult } = require("express-validator");
const Register_Validation = [
  body("Email", "The Email format is incorecct").isEmail(),
  body(
    "Password",
    "The length of the password should be 8 or more, At least one Uppercase, At least One special character and at least one number!"
  ).isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minSymbols: 1,
    minNumbers: 1,
    minUppercase: 1,
  }),
];
const Login_Validation = [
  body("Email", "The Email format is incorecct").isEmail(),
];
//in the validation it always has 3 parameters and one of them is next which is needed later for the next command and in my case it would be "Register" or Login
const Validation = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    res.status(400).send(errors);
  }
};

module.exports = { Register_Validation, Login_Validation, Validation };

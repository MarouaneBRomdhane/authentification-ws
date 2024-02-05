const users = require("../Model/Model"); // collection from database
const jwt = require("jsonwebtoken");

exports.IsAuth = async (req, res, next) => {
  const Token = req.header("Token");
  try {
    const SecretKey = "sseeeccccrrrreeeettttkkkkeeeeyyyyy";
    const Verify = jwt.verify(Token, SecretKey);
    if (!Verify) {
      res.status(400).send({ msg: "You are not Authorized!" });
    } else {
      const User = await users.findById(Verify._id);
      req.user = User;
      next();
    }
  } catch (error) {
    res.status(500).send({ msg: "Server Eroor", error });
  }
};

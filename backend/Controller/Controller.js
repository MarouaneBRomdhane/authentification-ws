const Users = require("../Model/Model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.Register = async (req, res) => {
  const { Email, Name, Password } = req.body;
  try {
    const found = await Users.findOne({ Email });
    if (found) {
      res.status(400).send({ msg: "Email already exists" });
    } else {
      const new_password = bcrypt.hashSync(Password, 10); // 10 is Salt and is used to strengthen the crypted password
      const User = new Users({ Email, Name, Password: new_password });
      const SecretKey = "ssssseeeeccccrrrreeeettttkkkkeeeeyyyyy";
      const Token = jwt.sign({ id: User._id }, SecretKey);
      await User.save();
      res.status(200).send({ msg: "User Successfully Added", User, Token });
    }
  } catch (error) {
    res.status(500).send({ msg: error });
    if (error) throw error;
  }
};
exports.Login = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const Found = await Users.findOne({ Email });
    if (!Found) {
      res
        .status(400)
        .send({ msg: "Email Not Found, Please Register or Try Again!" });
    } else {
      const ComparePassword = bcrypt.compareSync(Password, Found.Password);
      if (!ComparePassword) {
        res.status(400).send({ msg: "Wrong Password, Please Try Again!" });
      } else {
        const SecretKey = "ssssseeeeccccrrrreeeettttkkkkeeeeyyyyy";
        const Login_Token = jwt.sign({ id: Found._id }, SecretKey);
        res
          .status(200)
          .send({ msg: "Login Successful!", User: Found, Login_Token });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.GetCurrent = (req, res) => {
  res.status(200).send({ user: req.user });
};

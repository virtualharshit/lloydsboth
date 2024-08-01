const User = require("../models/userModel");

module.exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      working,
      experience,
      location,
      type,
      skills,
    } = req.body;

    console.log(req.body);

    const emailCheck = await User.findOne({ email });

    if (emailCheck) {
      return res
        .status(400)
        .json({ status: false, message: "Email already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
      working,
      experience,
      location,
      type,
      skills,
    });

    res
      .status(200)
      .json({ status: true, user, message: "User created successfully" });
  } catch (err) {
    res.status(401).send({ status: false, error: err.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ status: false, message: "User not found" });
    }

    const passwordcompare = password === user.password;

    if (!passwordcompare) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid Credentials" });
    }

    res.json({ status: true, user, message: "Login successful" });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

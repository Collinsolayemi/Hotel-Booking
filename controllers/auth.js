const User = require('../models/user');
const bcrypt = require('bcryptjs');
const createError = require('../utils/error');
const jwt = require('jsonwebtoken');

//Register functionality
const register = async (req, res, next) => {
  try {
    //hashing the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    //send the response to the user
    res.status(201).send('User have been created');
  } catch (error) {
    next(error);
  }
};

//Login functionality
const logIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(new createError(404, 'User not found'));

    //comapring passwords
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordCorrect) {
      return next(new createError(400, 'Password incorrect or username incorrect'));
    }

    //Sending token to the user if credential are correct
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

    //destructing the hidden field in the response body
    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie('access-token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (error) {
    next(error);
  }
};

module.exports = { logIn, register };

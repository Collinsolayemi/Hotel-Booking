const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken');

//Register functionality
export const register = async (req, res, next) => {
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

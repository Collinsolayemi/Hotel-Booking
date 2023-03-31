const { User } = require('../models/user');

export const updateUser = async (req, res, next) => {
  try {
    const update = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (!update) {
    }

    res.status(200).json(update);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json('user have been deleted');
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

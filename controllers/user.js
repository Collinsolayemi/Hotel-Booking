const { User } = require('../models/user');

export const updateUser = async (req, res, next) => {
  try {
    const update = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (!update) {
    }

    res.status(200).json({
      status: 'status',
      user: {
        update,
      },
    });
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
    res.status(200).json({
      status: 'success',
      user: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: 'success',
      number: user.length,
      users: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

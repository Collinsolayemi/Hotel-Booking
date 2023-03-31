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

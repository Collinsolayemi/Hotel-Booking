const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken');

export const verifyToken = (req, res) => {
  const token = req.headers.AuthToken;
  if (!token) {
    return next(createError(401, 'You are not authenticated'));
  }

  jwt.verify(token, process.env.JWT, (err, data) => {
    if (err) return next(createError(403, 'Token is not valid'));

    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || isAdmin) {
      next();
    } else {
      return next(createError(403, 'You are not authorize'));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, 'You are not authorize'));
    }
  });
};

//creating an error handler to catch error
exports.createError = (status, message) => {
  const error = new Error();
  error.message = message;
  error.status = status;

  return error;
};

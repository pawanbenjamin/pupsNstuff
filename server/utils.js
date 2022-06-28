// This is a higher order function that takes in an express handler function callback
// and returns a new one that does a try catch on your handler so you don't have
// to put a try catch in every route.
function asyncErrorHandler(callback) {
  return async function (req, res, next) {
    try {
      return callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = {
  asyncErrorHandler,
};

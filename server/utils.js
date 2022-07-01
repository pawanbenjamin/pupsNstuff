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

function authRequired(req, res, next) {
  const auth = req.header("Authorization");
  if (!auth) {
    next({
      name: "Authorization Error!",
      message: "You must pass an Authorization token in your header!",
    });
  }
  next();
}

module.exports = {
  asyncErrorHandler,
  authRequired,
};

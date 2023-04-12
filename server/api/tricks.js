const router = require("express").Router();
const {
  getTricks,
  createTrick,
  getTrickById,
  updateTrickById,
  deleteTrickById,
} = require("../../db/adapters");
const { asyncErrorHandler } = require("../utils");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const tricks = await getTricks();
    res.send(tricks);
  })
);

router.get(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const id = +req.params.id;
    const trick = await getTrickById(id);
    if (trick === undefined || Object.keys(trick).length === 0) {
      res.status(404);
      next({
        name: "Oops!",
        message: "No Trick with that ID found!",
      });
      return;
    }
    res.send(trick);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const trick = await createTrick(req.body);
    res.send(trick);
  })
);

router.patch(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const id = +req.params.id;
    const body = req.body;
    const trick = await updateTrickById(id, body);
    res.send(trick);
  })
);

router.delete(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const id = +req.params.id;
    const deletedTrick = await deleteTrickById(id);
    res.send(deletedTrick);
  })
);

module.exports = router;

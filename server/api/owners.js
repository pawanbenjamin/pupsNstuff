const {
  getOwners,
  getOwnerById,
  createOwner,
  updateOwnerById,
  deleteOwnerById,
} = require("../../db/adapters/owners");
const { getPuppiesByOwnerId } = require("../../db/adapters/puppies");
const { asyncErrorHandler } = require("../utils");

const router = require("express").Router();

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const newOwner = await createOwner(req.body);
    res.send(newOwner);
  })
);

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const owners = await getOwners();
    res.send(owners);
  })
);

router.get(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const owner = await getOwnerById(req.params.id);
    if (owner === undefined || Object.keys(owner).length === 0) {
      res.status(404);
      next({
        name: "Oops!",
        message: "No Owner with that ID found!",
      });
      return;
    }
    res.send(owner);
  })
);

router.get(
  "/:id/puppies",
  asyncErrorHandler(async (req, res, next) => {
    const puppiesByOwner = await getPuppiesByOwnerId(req.params.id);
    res.send(puppiesByOwner);
  })
);

router.patch(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const updatedOwner = await updateOwnerById(+req.params.id, req.body);
    res.send(updatedOwner);
  })
);

router.delete(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const deletedOwner = await deleteOwnerById(+req.params.id);
    res.send(deletedOwner);
  })
);
module.exports = router;

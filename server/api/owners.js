const {
  getOwners,
  getOwnerById,
  createOwner,
} = require("../../db/adapters/owners");
const { getPuppiesByOwnerId } = require("../../db/adapters/puppies");
const { asyncErrorHandler } = require("../utils");

const router = require("express").Router();

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const newOwner = await createOwner(req.body);
    const randomInt = Math.floor(Math.random() * 200);
    const token = `Randomly-Generate-Token#${randomInt}`;
    res.send({ newOwner, token });
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

module.exports = router;

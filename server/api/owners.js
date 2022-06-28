const { getOwners, getOwnerById } = require("../../db/adapters/owners");
const { getPuppiesByOwnerId } = require("../../db/adapters/puppies");
const { asyncErrorHandler } = require("../utils");

const router = require("express").Router();

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

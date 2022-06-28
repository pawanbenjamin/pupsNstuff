const { getOwners } = require("../../db/adapters/owners");
const { asyncErrorHandler } = require("../utils");

const router = require("express").Router();

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const owners = await getOwners();
    res.send(owners);
  })
);

module.exports = router;

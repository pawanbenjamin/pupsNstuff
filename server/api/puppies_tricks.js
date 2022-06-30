const {
  createPuppyTrick,
  removePuppyTrick,
} = require("../../db/adapters/puppies_tricks");
const { asyncErrorHandler } = require("../utils");

const router = require("express").Router();

// Adds a trick to thru table
router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const { puppy_id, trick_id } = req.body;
    const puppy_trick = await createPuppyTrick({ puppy_id, trick_id });
    res.send(puppy_trick);
  })
);

// Removes a trick from thru table
router.delete(
  "/:puppyId/:trickId",
  asyncErrorHandler(async (req, res, next) => {
    const { puppy_id, trick_id } = req.body;
    const removedPT = await removePuppyTrick({ puppy_id, trick_id });
    res.send(removedPT);
  })
);

module.exports = router;

const {
  createPuppyTrick,
  removePuppyTrick,
} = require("../../db/adapters/puppies_tricks");
const { asyncErrorHandler } = require("../utils");

const router = require("express").Router();

// Adds a trick to thru table
router.post(
  "/:puppyId/:trickId",
  asyncErrorHandler(async (req, res, next) => {
    const { puppyId, trickId } = req.params;
    const puppy_trick = await createPuppyTrick({ puppyId, trickId });
    res.send(puppy_trick);
  })
);

// Removes a trick from thru table
router.delete(
  "/:puppyId/:trickId",
  asyncErrorHandler(async (req, res, next) => {
    const { puppyId, trickId } = req.params;
    const removedPT = await removePuppyTrick({
      puppy_id: puppyId,
      trick_id: trickId,
    });
    res.send(removedPT);
  })
);

module.exports = router;

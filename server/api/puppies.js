const router = require("express").Router();
const { asyncErrorHandler } = require("../utils");
const {
  getPuppies,
  getPuppyById,
  updatePuppyById,
  deletePuppyById,
  createPuppy,
} = require("../../db/adapters/puppies");

// router.get("/", async (req, res, next) => {
//   try {
//     const puppies = await getPuppies();
//     res.send(puppies);
//   } catch (error) {
//     next(error);
//   }
// });
router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const createdPup = await createPuppy(req.body);
    res.send(createdPup);
  })
);

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const puppies = await getPuppies();
    res.send(puppies);
  })
);

router.get(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const { id } = req.params;
    const singlePup = await getPuppyById(id);
    res.send(singlePup);
  })
);

router.patch(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const { id } = req.params;
    const updatedPup = await updatePuppyById(id, req.body);
    res.send(updatedPup);
  })
);

router.delete(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const { id } = req.params;
    console.log("ID", id);
    const deletedPup = await deletePuppyById(id);
    res.send(deletedPup);
  })
);

module.exports = router;
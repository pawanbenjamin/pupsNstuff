const router = require("express").Router();

router.use("/puppies", require("./puppies"));
router.use("/owners", require("./owners"));

module.exports = router;

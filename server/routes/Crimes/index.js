const router = require("express").Router()

router.use("/get", require("./getCrime"))
router.use("/add", require("./addCrime"))
router.use("/update", require("./updateCrime"))
router.use("/remove", require("./removeCrime"))

module.exports = router

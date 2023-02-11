const router = require("express").Router()

router.use("/", require("./getCrime"))

module.exports = router

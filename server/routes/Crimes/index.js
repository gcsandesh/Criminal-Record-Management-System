const router = require("express").Router()

router.use("/get", require("./getCrime"))

module.exports = router

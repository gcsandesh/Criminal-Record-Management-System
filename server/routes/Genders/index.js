const router = require("express").Router()

router.use("/get", require("./getGender"))

module.exports = router

const router = require("express").Router()

router.use("/get", require("./getUser"))
router.use("/create", require("./createUser"))
router.use("/update", require("./updateUser"))
router.use("/delete", require("./deleteUser"))

module.exports = router

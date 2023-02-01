const router = require("express").Router()

const records = require("./Records")
const users = require("./Users")

router.use("/records", records)
router.use("/users", users)

module.exports = router

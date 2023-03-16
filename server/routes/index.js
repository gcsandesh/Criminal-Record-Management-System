const router = require("express").Router()

const records = require("./records")
const users = require("./users")
const crimes = require("./crimes")
const auth = require("./auth")

router.use("/records", records)
router.use("/users", users)
router.use("/crimes", crimes)
router.use("/auth", auth)

module.exports = router

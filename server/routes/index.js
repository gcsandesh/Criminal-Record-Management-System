const router = require("express").Router()

const records = require("./Records")
const users = require("./Users")
const crimes = require("./Crimes")

router.use("/records", records)
router.use("/users", users)
router.use("/crimes", crimes)

module.exports = router

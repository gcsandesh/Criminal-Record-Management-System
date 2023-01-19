const router = require("express").Router()

const records = require("./Records")
const crimes = require("./Crimes")
const users = require("./Users")

router.use("/records", records)
router.use("/crimes", crimes)
router.use("/users", users)

module.exports = router

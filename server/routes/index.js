const router = require("express").Router()

const records = require("./Records")
const crimes = require("./Crimes")
const users = require("./Users")
const genders = require("./Genders")

router.use("/records", records)
router.use("/crimes", crimes)
router.use("/users", users)
router.use("/genders", genders)

module.exports = router

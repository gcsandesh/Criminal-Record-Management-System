const express = require("express")

const router = express.Router()

router.use("/get", require("./getRecord"))
router.use("/create", require("./createRecord"))
router.use("/delete", require("./deleteRecord"))
router.use("/update", require("./updateRecord"))

module.exports = router

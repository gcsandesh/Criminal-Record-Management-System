const router = require("express").Router()
const db = require("../../config/db")
const deleteRecord = require("../../controllers/recordControllers/deleteRecordController")

router.delete("/id/:id", deleteRecord)

module.exports = router

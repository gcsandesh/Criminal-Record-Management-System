const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")

const createRecord = require("../../controllers/recordControllers/createRecordController")

const upload = multer({ dest: path.resolve(__dirname, "../../photos") })

// create record
router.post("/", upload.single("photo"), createRecord)

module.exports = router

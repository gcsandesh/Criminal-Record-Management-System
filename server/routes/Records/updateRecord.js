const router = require("express").Router()
const path = require("path")
const multer = require("multer")
const upload = multer({ dest: path.resolve(__dirname, "../../photos") })

const updateRecord = require("../../controllers/updateRecordController")

router.patch("/id/:id", upload.single("photo"), updateRecord)

module.exports = router

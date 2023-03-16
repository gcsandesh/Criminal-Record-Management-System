const router = require("express").Router()

const path = require("path")
const multer = require("multer")
const upload = multer({ dest: path.resolve(__dirname, "../photos") })

const {
    getAllRecords,
    getRecord,
    updateRecord,
    deleteRecord,
    createRecord,
    getSearchedRecord,
} = require("../controllers/records")

// routes
router.route("/").get(getAllRecords).post(upload.single("photo"), createRecord)
router
    .route("/id/:id")
    .get(getRecord)
    .patch(upload.single("photo"), updateRecord)
    .delete(deleteRecord)

router.route("/record").get(getSearchedRecord)

module.exports = router

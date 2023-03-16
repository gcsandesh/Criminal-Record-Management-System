const router = require("express").Router()
const {
    getAllCrimes,
    getCrime,
    addCrime,
    modifyCrime,
    removeCrime,
} = require("../controllers/crimes")

router.route("/").get(getAllCrimes).post(addCrime)
router.route("/id/:id").get(getCrime).patch(modifyCrime).delete(removeCrime)

module.exports = router

const router = require("express").Router()
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {
	getAllRecords,
	getRecordById,
	getSearchedRecord,
} = require("../../controllers/recordControllers/getRecordController")

// get all records
// router.get("/", authenticateToken, (req, res) => {
router.get("/", getAllRecords)

// get for each record page
router.get("/id/:id", getRecordById)

// get from the search form
router.get("/record", getSearchedRecord)

// function authenticateToken(req, res, next) {
// 	console.log("authenticating token")
// 	// get token, verify, send user to function
// 	const authHeader = req.headers["authorization"]
// 	const token = authHeader && authHeader.split(" ")[1] //Bearer TOKEN

// 	console.log(authHeader, token)
// 	if (!token) return res.sendStatus(401)

// 	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
// 		if (err) return res.sendStatus(403)
// 		req.user = user
// 		next()
// 	})
// }

module.exports = router

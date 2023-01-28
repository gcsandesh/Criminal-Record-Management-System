const router = require("express").Router()
const db = require("../../config/db")

// *********** add a crime ************/
router.post("/create", (req, res) => {
	const crimeName = req.body.name
	db.query("INSERT INTO crimes(name) VALUES(?)", crimeName, (error, result) => {
		if (error) return res.status(400).send("Error inserting data!")
		return res.send(result)
	})
})

module.exports = router
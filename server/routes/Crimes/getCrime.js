const router = require("express").Router()
const db = require("../../config/db")

// *********** get all crimes *********/
router.get("/", (req, res) => {
	db.query("SELECT * FROM crimes", (error, result) => {
		if (error) return res.status(404).send("No items found!")
		return res.send(result)
	})
})

router.get("/id/:id", (req, res) => {
	const crimeId = req.params.id
	db.query(
		"SELECT * FROM crimes WHERE crime_id=?",
		crimeId,
		(error, result) => {
			if (error) res.status(404).send("No crime found with given id!")
		}
	)
})

module.exports = router

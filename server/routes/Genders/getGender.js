const router = require("express").Router()
const db = require("../../config/db")

router.get("/id/:id", (req, res) => {
	const gender_id = req.params.id
	db.query(
		"SELECT * FROM genders WHERE gender_id=?",
		gender_id,
		(error, result) => {
			if (error) res.status(500).send("Error getting gender")
			res.send(result)
		}
	)
})

module.exports = router

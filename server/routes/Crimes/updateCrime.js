const router = require("express").Router()
const db = require("../../config/db")

router.patch("/id/:id", (req, res) => {
	const crimeId = req.params.id
	const name = req.body.name
	db.query(
		"UPDATE crimes SET name=? WHERE crime_id=?",
		[name, crimeId],
		(error, result) => {
			if (error) res.status(404).send("No crime with given id was found!")
			res.send(result)
		}
	)
})

module.exports = router

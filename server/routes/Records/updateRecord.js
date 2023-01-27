const router = require("express").Router()
const db = require("../../config/db")

router.patch("/id/:id", (req, res) => {
	const record_id = req.params.id
	console.log(req.body)
	const {
		first_name,
		middle_name,
		last_name,
		age,
		gender_id,
		height_inch,
		crime_id,
		photo,
	} = req.body

	db.query(
		"SELECT * FROM records WHERE record_id=?",
		record_id,
		(error, result) => {
			if (error) res.status(500).send(error)
			else if (!result.length) res.status(404).send("No records found!")
			else
				db.query(
					"UPDATE records SET first_name=?, middle_name=?, last_name=?, age=?, gender_id=?, height_inch=?, crime_id=?, photo=? WHERE record_id=?",
					[
						first_name,
						middle_name,
						last_name,
						age,
						gender_id,
						height_inch,
						crime_id,
						photo,
						record_id,
					],
					(error, result) => {
						if (error) res.status(500).send(error)
						res.send(result)
					}
				)
		}
	)
})

module.exports = router

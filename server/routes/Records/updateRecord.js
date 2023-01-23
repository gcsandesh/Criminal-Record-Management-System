const router = require("express").Router()
const db = require("../../config/db")

router.patch("/id/:id", (req, res) => {
	const recordId = req.params.id
	const {
		firstName,
		middleName,
		lastName,
		age,
		genderId,
		height,
		crimeId,
		photo,
	} = req.body

	db.query(
		"SELECT * FROM records WHERE record_id=?",
		recordId,
		(error, result) => {
			if (error) res.status(500).send(error)
			else if (!result.length) res.status(404).send("No records found!")
			else
				db.query(
					"UPDATE records SET first_name=?, middle_name=?, last_name=?, age=?, gender_id=?, height_inch=?, crime_id=?, photo=? WHERE record_id=?",
					[
						firstName,
						middleName,
						lastName,
						age,
						genderId,
						height,
						crimeId,
						photo,
						recordId,
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

const router = require("express").Router()
const db = require("../../config/db")

router.patch("/id/:id", (req, res) => {
	const recordId = req.params.id
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
		"UPDATE crimes SET first_name=?, middle_name=?, last_name=?, age=?, gender_id=?, height_inch=?, crime_id=?, photo=? WHERE record_id=?",
		[
			first_name,
			middle_name,
			last_name,
			age,
			gender_id,
			height_inch,
			crime_id,
			photo,
			recordId,
		],
		(error, result) => {
			if (error) res.status(404).send("Record with given id was not found!")
			res.send(result)
		}
	)
})

module.exports = router

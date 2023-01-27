const router = require("express").Router()
const db = require("../../config/db")

// create record
router.post("/", (req, res) => {
	const { firstName, middleName, lastName, age, gender, crime, height, photo } =
		req.body
	try {
		db.query(
			"INSERT INTO records(first_name, middle_name, last_name, age, gender_id, height_inch, crime_id, photo) VALUES(?,?,?,?,?,?,?,?);",
			[firstName, middleName, lastName, age, gender, height, crime, photo],
			(error, result) => {
				if (error) console.log(error)
				console.log("Record Added!")
				res.send(result)
			}
		)
	} catch {
		console.log("Error running query!")
	}
})

module.exports = router

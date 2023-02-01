const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const db = require("../../config/db")
const upload = multer({ dest: path.resolve(__dirname, "../../photos") })

// create record
router.post("/", upload.single("photo"), (req, res) => {
	let { firstName, middleName, lastName, age, gender, crime, height } = req.body
	const photo = req.file

	try {
		db.query(
			"INSERT INTO records(first_name, middle_name, last_name, age, gender, height_inch, crime, photo) VALUES(?,?,?,?,?,?,?,?);",
			[firstName, middleName, lastName, age, gender, height, crime, photo.path],
			(error, result) => {
				if (error) console.log(error)
				console.log("Record Added!")
				res.send(result)
			}
		)
	} catch (err) {
		console.log("Error running query!")
		res.send(new Error(err))
	}
})

module.exports = router

const router = require("express").Router()
const db = require("../../config/db")

// get all records
router.get("/", (req, res) => {
	try {
		db.query("SELECT * FROM records", (error, result) => {
			if (error) console.log(error)
			res.send(result)
		})
	} catch {
		console.log("Error running query!")
	}
})

// get user by Id
router.get("/id/:id", (req, res) => {
	const recordId = req.params.id
	try {
		db.query(
			"SELECT * FROM records WHERE record_id=?",
			recordId,
			(error, result) => {
				if (error) console.log(error)
				res.send(result)
			}
		)
	} catch {
		console.log("Error running query!")
	}
})

// get user by first name
router.get("/firstName/:firstName", (req, res) => {
	const firstName = req.params.firstName
	try {
		db.query(
			"SELECT * FROM records WHERE first_name=?",
			firstName,
			(error, result) => {
				if (error) console.log(error)
				res.send(result)
			}
		)
	} catch {
		console.log("Error running query!")
	}
})

// get user by middle name
router.get("/middleName/:middleName", (req, res) => {
	const middleName = req.params.middleName
	try {
		db.query(
			"SELECT * FROM records WHERE middle_name=?",
			middleName,
			(error, result) => {
				if (error) console.log(error)
				res.send(result)
			}
		)
	} catch {
		console.log("Error running query!")
	}
})

// get user by last name
router.get("/lastName/:lastName", (req, res) => {
	const lastName = req.params.lastName
	try {
		db.query(
			"SELECT * FROM records WHERE last_name=?",
			lastName,
			(error, result) => {
				if (error) console.log(error)
				res.send(result)
			}
		)
	} catch {
		console.log("Error running query!")
	}
})

// get user by age
router.get("/age/:age", (req, res) => {
	const age = req.params.age
	try {
		db.query("SELECT * FROM records WHERE age=?", age, (error, result) => {
			if (error) console.log(error)
			res.send(result)
		})
	} catch {
		console.log("Error running query!")
	}
})

// get user by gender
router.get("/gender/:gender", (req, res) => {
	const gender = req.params.gender
	try {
		db.query(
			"SELECT * FROM records WHERE gender_id=?",
			gender,
			(error, result) => {
				if (error) console.log(error)
				res.send(result)
			}
		)
	} catch {
		console.log("Error running query!")
	}
})

// get user by crime
router.get("/crime/:crime", (req, res) => {
	const crime = req.params.crime
	try {
		db.query(
			"SELECT * FROM records WHERE crime_id=?",
			crime,
			(error, result) => {
				if (error) console.log(error)
				res.send(result)
			}
		)
	} catch {
		console.log("Error running query!")
	}
})

module.exports = router

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

// get for each record page
router.get("/:id", (req, res) => {
	const recordId = req.params.id
	db.query(
		"SELECT * FROM records WHERE record_id=?",
		recordId,
		(error, result) => {
			if (error) return res.status(500).send("Error running query!")
			res.send(result)
		}
	)
})

// get from the search form
router.get("/record", (req, res) => {
	const items = [
		["firstName", "first_name"],
		["middleName", "middle_name"],
		["lastName", "last_name"],
		["age", "age"],
		["gender", "gender_id"],
		["crime", "crime_id"],
	]
	// const { firstName, middleName, lastName, age, gender, crime } = req.query
	const nonEmptyItems = Object.keys(req.query).filter(
		(eachItem) => req.query[eachItem]
	)
	const nonEmptyCols = nonEmptyItems.map((eachItem) => {
		return (eachItem = items.find((item) => item[0] === eachItem)[1])
	})

	let queryString = ""

	if (!nonEmptyCols.length) res.send("Empty form!")
	else {
		let condition = ""
		for (let i = 0; i < nonEmptyCols.length; i++) {
			if (i === nonEmptyCols.length - 1) {
				condition = condition + nonEmptyCols[i] + "=?"
			} else {
				condition = condition + nonEmptyCols[i] + "=? && "
			}
		}
		queryString = `SELECT * FROM records WHERE ${condition};`
	}
	// console.log(queryString)
	// console.log(nonEmptyItems)
	db.query(
		queryString,
		nonEmptyItems.map((item) => eval(item)),
		(error, result) => {
			if (error) res.status(500).send(error)
			res.send(result)
		}
	)
})

module.exports = router

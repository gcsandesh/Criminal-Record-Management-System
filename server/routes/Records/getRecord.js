const router = require("express").Router()
const db = require("../../config/db")
const fs = require("fs")
const path = require("path")

// get all records
router.get("/", (req, res) => {
	try {
		db.query("SELECT * FROM records JOIN crimes ON records.crime_id = crimes.crime_id;", async (error, result) => {
			if (error) return res.status(500).send(error)
			if (!result.length) return res.status(404).send(result)

			for (let record of result) {
				if (record.photo) {
					record.photo = await convertPhotoToObj(record.photo)
				}
			}
			res.send(result)
		})
	} catch {
		console.log("Error running query!")
	}
})

// get for each record page
router.get("/id/:id", (req, res) => {
	const recordId = req.params.id
	db.query(
		"SELECT * FROM records WHERE record_id=?;",
		recordId,
		async (error, result) => {
			if (error) return res.status(500).send(error)
			if (!result.length) return res.status(404).send(result)
			if (result[0].photo) {
				// console.log("converting image")
				result[0].photo = await convertPhotoToObj(result[0].photo)
			}
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
		["gender", "gender"],
		["crime", "crime"],
	]
	// since I've used eval() below, destructuring is necessary here
	const { firstName, middleName, lastName, age, gender, crime } = req.query
	const nonEmptyItems = Object.keys(req.query).filter(
		(eachItem) => req.query[eachItem]
	)
	const nonEmptyCols = nonEmptyItems.map((eachItem) => {
		return (eachItem = items.find((item) => item[0] === eachItem)[1])
	})

	let queryString = ""

	if (!nonEmptyCols.length) return res.send([])
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
	// console.log(eval(nonEmptyItems[0]))
	db.query(
		queryString,
		nonEmptyItems.map((item) => eval(item)),
		async (error, result) => {
			if (error) return res.status(500).send(error)
			if (!result.length) {
				return res.status(404).send(result)
			}
			for (record of result) {
				if (record.photo) {
					record.photo = await convertPhotoToObj(record.photo)
				}
			}
			return res.send(result)
		}
	)
})

async function convertPhotoToObj(photoURL) {
	// console.log(photoURL)
	return new Promise((resolve, reject) => {
		fs.readFile(photoURL, (error, result) => {
			if (error) reject(error)
			if (!result) reject(result)
			else resolve({ b64: Buffer.from(result.buffer).toString("base64") })
		})
	})
}

module.exports = router

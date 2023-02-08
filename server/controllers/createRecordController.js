const db = require("../config/db")

// adding record to db
async function createRecord(req, res) {
	let { firstName, middleName, lastName, age, gender, crime, height } = req.body

	const crime_id = await crimeToCrimeId(crime)
	const photo = req.file

	let queryString =
		"INSERT INTO records(first_name, middle_name, last_name, age, gender, height_inch, crime_id) VALUES(?,?,?,?,?,?,?);"
	let queryParams = [
		firstName,
		middleName,
		lastName,
		age,
		gender,
		height,
		crime_id,
	]

	if (photo) {
		queryParams.push(photo.path)
		queryString =
			"INSERT INTO records(first_name, middle_name, last_name, age, gender, height_inch, crime_id, photo) VALUES(?,?,?,?,?,?,?,?);"
	}

	try {
		db.query(queryString, queryParams, (error, result) => {
			if (error) return res.json({ message: error })
			// console.log("Record Added!")
			return res.send(result)
		})
	} catch (err) {
		return res.json({ message: new Error(err) })
	}
}

// finding crime id from crime
function crimeToCrimeId(crimeName) {
	console.log(crimeName)
	if (!crimeName) return 0
	return new Promise((resolve, reject) => {
		db.query(
			"SELECT crime_id FROM crimes WHERE cname=?",
			crimeName,
			(error, result) => {
				if (error) reject(error)
				if (!result.length) reject(result)
				resolve(result[0].crime_id)
			}
		)
	})
}

module.exports = createRecord

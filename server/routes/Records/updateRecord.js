const router = require("express").Router()
const fs = require("fs")
const path = require("path")
const multer = require("multer")
const upload = multer({ dest: path.resolve(__dirname, "../../photos") })
const db = require("../../config/db")

router.patch("/id/:id", upload.single("photo"), (req, res) => {
	const record_id = req.params.id

	const {
		first_name,
		middle_name,
		last_name,
		age,
		gender,
		height_inch,
		crime,
	} = req.body

	// console.log(req.body.crime)

	const photo = req.file
	// console.log(photo)

	// check if record exists
	db.query(
		"SELECT * FROM records WHERE record_id=?",
		record_id,
		async (error, result) => {
			if (error) return res.status(500).send(error)
			if (!result.length) return res.status(404).send(result)

			const oldPhoto = result[0].photo

			let queryParams = [
				first_name,
				middle_name,
				last_name,
				age,
				gender,
				height_inch,
				crime,
				record_id,
			]
			let queryString =
				"UPDATE records SET first_name=?, middle_name=?, last_name=?, age=?, gender=?, height_inch=?, crime=? WHERE record_id=?"

			if (photo) {
				queryString =
					"UPDATE records SET first_name=?, middle_name=?, last_name=?, age=?, gender=?, height_inch=?, crime=?, photo=? WHERE record_id=?"

				queryParams = [
					first_name,
					middle_name,
					last_name,
					age,
					gender,
					height_inch,
					crime,
					photo.path,
					record_id,
				]
				if (oldPhoto) {
					const removeFile = await removeOldFileFromStorage(
						path.resolve(oldPhoto)
					)
					// console.log("old file removed!", removeFile)
				}
			}

			// if no error occurs, and if there is some result
			db.query(queryString, queryParams, (error, result) => {
				if (error) return res.status(500).send(error)
				return res.send(result)
			})
		}
	)
})

async function removeOldFileFromStorage(filePath) {
	return new Promise((resolve, reject) => {
		fs.unlink(path.resolve(filePath), (err, res) => {
			if (err) {
				reject("Error removing file!")
			}
			resolve("file removed")
		})
	})
}

module.exports = router

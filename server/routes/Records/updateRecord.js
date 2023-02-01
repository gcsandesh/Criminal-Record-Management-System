const router = require("express").Router()
const fs = require("fs")
const path = require("path")
const multer = require("multer")
const upload = multer({ dest: path.resolve(__dirname, "../../photos") })
const db = require("../../config/db")

router.patch("/id/:id", upload.single("photo"), (req, res) => {
	const record_id = req.params.id
	// console.log(req.body)
	const {
		first_name,
		middle_name,
		last_name,
		age,
		gender_id,
		height_inch,
		crime_id,
	} = req.body

	const photo = req.file

	db.query(
		"SELECT * FROM records WHERE record_id=?",
		record_id,
		async (error, result) => {
			if (error) return res.status(500).send(error)
			if (!result.length) return res.status(404).send(result)

			const oldPhoto = result[0].photo
			if (oldPhoto && photo) {
				// console.log("oldphoto", oldPhoto)
				// console.log("newphoto:", photo)
				const removeFile = await removeOldFileFromStorage(
					path.resolve(oldPhoto)
				)
				console.log(removeFile)
			}

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
					photo.path,
					record_id,
				],
				(error, result) => {
					if (error) return res.status(500).send(error)
					return res.send(result)
				}
			)
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

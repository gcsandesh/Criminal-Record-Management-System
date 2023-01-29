const router = require("express").Router()
const db = require("../../config/db")

router.get("/id/:id", (req, res) => {
	const gender_id = req.params.id
	db.query(
		"SELECT * FROM genders WHERE gender_id=?",
		gender_id,
		(error, result) => {
			if (error) return res.status(500).send(result)
			if (!result.length) return res.status(404).send(result)
			return res.send(result)
		}
	)
})

module.exports = router

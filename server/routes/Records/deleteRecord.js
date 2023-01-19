const router = require("express").Router()
const db = require("../../config/db")

router.delete("/id/:id", (req, res) => {
	const recordId = req.params.id
	db.query(
		"DELETE * FROM records WHERE record_id=?",
		recordId,
		(error, result) => {
			if (error) res.status(404).send("Couldnot find record with given id!")
			res.send(result)
		}
	)
})

module.exports = router

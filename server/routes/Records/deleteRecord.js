const router = require("express").Router()
const db = require("../../config/db")

router.delete("/id/:id", (req, res) => {
	const recordId = req.params.id
	const result = []
	// first find item
	db.query(
		"SELECT * FROM records WHERE record_id=?",
		recordId,
		(error, result) => {
			if (error) res.status(500).send(error)
			else if (!result.length) res.status(404).send("No record found!")
			else {
				// if no error in searching item, and if item is found, then delete item
				db.query(
					"DELETE FROM records WHERE record_id=?",
					recordId,
					(error, result) => {
						// if there is error while deleting record
						if (error) res.status(500).send(error)
					}
				)
				// if record existed and is now deleted, then send deleted record
				res.send(result)
			}
		}
	)
})

module.exports = router

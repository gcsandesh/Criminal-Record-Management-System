const router = require("express").Router()

router.delete("/id/:id", (req, res) => {
	db.query("DELETE * FROM crimes WHERE crime_id=?", id, (error, result) => {
		if (error) return res.status(404).send("No items found with given id!")
		return res.send(result)
	})
})

module.exports = router

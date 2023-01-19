const router = require("express").Router()
const db = require("../../config/db")

router.delete("/delete", (req, res) => {
	// ************* DELETE ************//
	//delete user by name
	router.delete("/delete/name/:name", (req, res) => {
		const name = req.params.name
		db.query("DELETE FROM users WHERE name=?", name, (error, result) => {
			if (error) console.log(error)
			res.send(result)
		})
	})

	//delete user by id
	router.delete("/delete/id/:id", (req, res) => {
		const id = req.params.id
		db.query("DELETE FROM users WHERE user_id=?", id, (error, result) => {
			if (error) console.log(error)
			res.send(result)
		})
	})
})

module.exports = router

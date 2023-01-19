const router = require("express").Router()
const db = require("../../config/db")

// get all users
router.get("/", (req, res) => {
	db.query("SELECT * FROM users", (error, result) => {
		if (error) console.log(error)
		res.send(result)
	})
})

// get single user by id
router.get("/id/:id", (req, res) => {
	const userId = req.params.id
	db.query("SELECT * FROM users WHERE user_id=?", userId, (error, result) => {
		if (error) console.log(error)
		res.send(result)
	})
})

// get user by name
router.get("/name/:name", (req, res) => {
	const name = req.params.name
	db.query("SELECT * FROM users WHERE name=?", name, (error, result) => {
		if (error) console.log(error)
		res.send(result)
	})
})

module.exports = router

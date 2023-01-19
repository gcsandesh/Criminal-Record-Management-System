const router = require("express").Router()
const db = require("../../config/db")

// ************ READ *********** //

// get all users
router.get("/", (req, res) => {
	db.query("SELECT * FROM users", (error, result) => {
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

// get user by id
router.get("/id/:id", (req, res) => {
	const id = req.params.id
	db.query("SELECT * FROM users WHERE user_id=?", id, (error, result) => {
		if (error) console.log(error)
		res.send(result)
	})
})

// ************ CREATE *********** //

//create user
router.post("/create", (req, res) => {
	const name = req.body.name
	db.query("INSERT INTO users(name) VALUES(?)", name, (error, result) => {
		if (error) console.log(error)
		res.send(result)
	})
})

// ************ UPDATE *********** //
//update user by id
router.patch("/update/id/:id", (req, res) => {
	const id = req.params.id
	const name = req.body.name
	db.query(
		"UPDATE users SET name=? WHERE user_id=?",
		[name, id],
		(error, result) => {
			if (error) console.log(error)
			res.send(result)
		}
	)
})

// update user by name
router.patch("/update/name/:name", (req, res) => {
	const oldName = req.params.name
	const newName = req.body.name
	db.query(
		"UPDATE users SET name=? WHERE name=?",
		[newName, oldName],
		(error, result) => {
			if (error) console.log(error)
			res.send(result)
		}
	)
})

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

module.exports = router

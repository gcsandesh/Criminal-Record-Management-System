const router = require("express").Router()
const db = require("../../config/db")

//create user
router.post("/", (req, res) => {
	const name = req.body.name
	db.query("INSERT INTO users(name) VALUES(?)", name, (error, result) => {
		if (error) console.log(error)
		res.send(result)
	})
})

module.exports = router

const router = require("express").Router()
const db = require("../../config/db")

//update user by id
router.patch("/id/:id", (req, res) => {
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

module.exports = router

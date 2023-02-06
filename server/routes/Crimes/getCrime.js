const router = require("express").Router()
const db = require("../../config/db")

router.get("/", (req, res) => {
	db.query("SELECT * FROM crimes;", (error, result) => {
		if (error) return res.status(500).send(error)
		if (!result.length) return res.status(404).send(result)
		return res.status(200).send(result)
	})
})

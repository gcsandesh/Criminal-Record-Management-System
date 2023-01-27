const http = require("http")
const express = require("express")
const bcrypt = require("bcrypt")
const app = express()
const db = require("./config/db")

app.post("/login", (req, res) => {
	const username = req.body.username
	const password = req.body.password
	db.query(
		"SELECT * FROM users WHERE username=?",
		username,
		(error, result) => {
			if (error) res.status(500).send("Error logging in!")
			else if (!result.length) return res.status(404).send("Invalid Username")
			else {
				result.find(
					async (user) => await bcrypt.compare(password, user.password)
				)
			}
			res.send(result)
		}
	)
	res.send("login")
})

// creating user
app.post("/regiser", async (req, res) => {
	const username = req.body.username
	const password = req.body.password

	const salt = await bcrypt.genSalt()
	const hashedPassword = await bcrypt.hash(password, salt)

	db.query(
		"INSERT INTO users(username, password) VALUES(?,?);",
		[name, hashedPassword],
		(error, result) => {
			if (error) res.status(500).send("Error in registration!")
			res.send(result)
		}
	)
})

const port = 9900
app.listen(port, () => console.log("auth server started on port:", port))

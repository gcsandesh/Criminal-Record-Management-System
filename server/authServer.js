const express = require("express")
const bcrypt = require("bcrypt")
const app = express()
const db = require("./config/db")
const ejs = require("ejs")
const cors = require("cors")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set("view-engine", "ejs")
app.use(cors())

// rendering register page
app.get("/register", (req, res) => {
	res.render("./register.ejs")
})

// send to login page
app.get("/login", (req, res) => {
	res.redirect("http://localhost:5173/")
})

// authenticating user login
app.post("/login", (req, res) => {
	const username = req.body.username
	const password = req.body.password
	db.query(
		"SELECT * FROM users WHERE username=?",
		username,
		async (error, result) => {
			let isValid = false
			if (error) return res.status(500).send(isValid)
			else if (!result.length) return res.status(404).send(isValid)
			else {
				const user = result[0]
				isValid = await bcrypt.compare(password, user.password)
			}
			res.send(isValid)
		}
	)
})

// creating user
app.post("/register", async (req, res) => {
	const username = req.body.username
	const password = req.body.password

	const salt = await bcrypt.genSalt()
	const hashedPassword = await bcrypt.hash(password, salt)
	db.query(
		"INSERT INTO users(username, password) VALUES(?,?);",
		[username, hashedPassword],
		(error, result) => {
			if (error) return res.status(500).send("Error in registration!")
			res.render("login.ejs")
		}
	)
})

const port = 9900
app.listen(port, () => console.log("auth server started on port:", port))
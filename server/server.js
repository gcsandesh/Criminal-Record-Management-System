const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const db = require("./config/db")
const allRoutes = require("./routes")

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// connecting to database
db.connect((err) => {
	if (err) {
		console.error("Error connecting to DB!", err.stack)
		return
	}
	console.log("Connected to DB as:", db.threadId)
})

const port = process.env.PORT || 9988

// starting server to listen on port
app.listen(port, () => {
	console.log("Server is listening on:", port)
})

// routes
app.get("/", (req, res) => {
	res.send(
		"go to '/api/records' for records, '/api/crimes' for crimes, '/api/users' for users"
	)
})
// app.get("*", (req, res)=>{
// 	res.send("Where u at?")
// })

app.use("/api", allRoutes)

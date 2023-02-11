const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const db = require("./db")
const allRoutes = require("../routes")
// const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

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

// routes
app.get("/", (req, res) => {
    res.send(
        "go to '/api/records' for records, '/api/crimes' for crimes, '/api/users' for users"
    )
})

app.use("/api", allRoutes)
app.get("*", (req, res) => {
    res.json({ message: "Where u at?" })
})

module.exports = app

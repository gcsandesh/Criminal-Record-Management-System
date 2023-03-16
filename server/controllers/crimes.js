const db = require("../config/db")

// GET ALL CRIMES //
const getAllCrimes = (req, res) => {
    db.query("SELECT * FROM crimes ORDER BY cname;", (error, result) => {
        if (error) return res.status(500).send(error)
        if (!result.length) return res.status(404).send(result)
        return res.status(200).send(result)
    })
}

// get single crime by id
const getCrime = (req, res) => {
    const crime_id = req.params.id
    db.query(
        "SELECT * FROM crimes WHERE crime_id = ?;",
        crime_id,
        (error, result) => {
            if (error) return res.status(500).send(error)
            if (!result.length) return res.status(404).send(result)
            return res.status(200).send(result)
        }
    )
}

// ADD CRIME //
const addCrime = (req, res) => {
    res.send("Crime added!")
}

const modifyCrime = (req, res) => {
    res.send("modified Crime!")
}

const removeCrime = (req, res) => {
    res.send("removed crime!")
}

module.exports = { getAllCrimes, getCrime, addCrime, modifyCrime, removeCrime }

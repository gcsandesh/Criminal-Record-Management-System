const router = require("express").Router()
const db = require("../../config/db")

// get all crimes
router.get("/", (req, res) => {
    db.query("SELECT * FROM crimes ORDER BY cname;", (error, result) => {
        if (error) return res.status(500).send(error)
        if (!result.length) return res.status(404).send(result)
        return res.status(200).send(result)
    })
})

// get single crime by id
router.get("/id/:id", (req, res) => {
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
})

module.exports = router

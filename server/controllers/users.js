const db = require("../config/db")

// GET ALL USERS //

const getAllUsers = (req, res) => {
    db.query("SELECT * FROM users", (error, result) => {
        if (error) console.log(error)
        res.send(result)
    })
}

// GET A USER //

const getUser = (req, res) => {
    const userId = req.params.id
    db.query("SELECT * FROM users WHERE user_id=?", userId, (error, result) => {
        if (error) console.log(error)
        res.send(result)
    })
}

// DELETE USER //

const deleteUser = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM users WHERE user_id=?", id, (error, result) => {
        if (error) console.log(error)
        res.send(result)
    })
}

// UPDATE USER //

const updateUser = (req, res) => {
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
}

module.exports = { getUser, getAllUsers, updateUser, deleteUser }

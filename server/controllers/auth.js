const db = require("../config/db")
const bcrypt = require("bcrypt")

//  LOG IN USER

const loginUser = async (req, res) => {
    // authenticating user login
    const username = req.body.username
    const password = req.body.password
    db.query(
        "SELECT * FROM users WHERE username=?;",
        username,
        async (error, result) => {
            console.log(result[0])
            let isValid = false
            if (error) return res.status(500).send(isValid)
            else if (!result.length) return res.status(404).send(result)
            else {
                const user = result[0]
                isValid = await bcrypt.compare(password, user.password)
            }
            return res.json({ isValid: isValid, role: result[0].role })
        }
    )
}

// REGISTER USER

const registerUser = async (req, res) => {
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
}

module.exports = { loginUser, registerUser }

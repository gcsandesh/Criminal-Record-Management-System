const router = require("express").Router()
const { loginUser, registerUser } = require("../controllers/auth")

router.post("/login", loginUser)
router.post("/register", registerUser)
router.get("/register", (req, res) => {
    res.render("register.ejs")
})
module.exports = router

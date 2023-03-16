const router = require("express").Router()

const {
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
} = require("../controllers/users")

router.route("/").get(getAllUsers)
router.route("/id/:id").patch(updateUser).delete(deleteUser).get(getUser)

module.exports = router

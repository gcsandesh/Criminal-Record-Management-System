const express = require("express");

const router = express.Router();

// get all users
router.get("/", (req, res) => {
	res.send("all users");
});

// get user by Id
router.get("/:id", (req, res) => {
	const id = req.params.id;
	res.send(`user: ${id}`);
});

// get user by first name
router.get("/:firstName", (req, res) => {
	const firstName = req.params.firstName;
	res.send(`user: ${firstName} ____`);
});

// get user by last name
router.get("/:lastName", (req, res) => {
	const lastName = req.params.lastName;
	res.send(`user: ___ ${lastName}`);
});

module.exports = router;

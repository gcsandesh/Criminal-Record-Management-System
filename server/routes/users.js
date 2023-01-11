const express = require("express");
const db = require("../config/db");

const router = express.Router();

// get all users
router.get("/", (req, res) => {
	try {
		db.query("SELECT * FROM users", (error, result) => {
			if (error) console.log(error);
			res.send(result);
		});
	} catch {
		console.log("Error running query!");
	}
});

// get user by Id
router.get("/id/:id", (req, res) => {
	const id = req.params.id;
	try {
		db.query("SELECT * FROM users WHERE user_id=?", id, (error, result) => {
			if (error) console.log(error);
			res.send(result);
		});
	} catch {
		console.log("Error running query!");
	}
});

// get user by first name
// router.get("/firstName/:firstName", (req, res) => {
// 	const firstName = req.params.firstName;
// 	try {
// 		db.query(
// 			"SELECT * FROM users WHERE first_name=?",
// 			firstName,
// 			(error, result) => {
// 				if (error) console.log(error);
// 				res.send(result);
// 			}
// 		);
// 	} catch {
// 		console.log("Error runnign query!");
// 	}
// });

// // get user by last name
// router.get("/lastName/:lastName", (req, res) => {
// 	const lastName = req.params.lastName;
// 	res.send(`user: ___ ${lastName}`);
// });

//get user by age
// router.get("/age/:age", (req, res) => {
// 	const age = req.params.age;
// 	res.send(`age: ${age}`);
// });

// create user
router.post("/create", (req, res) => {
	const {
		firstName,
		middleName,
		lastName,
		age,
		genderId,
		height,
		isCriminal,
		crimeId,
		photo,
	} = req.body;
	// const firstName = req.body.firstName;
	// const middleName = req.body.middleName;
	// const lastName = req.body.lastName;
	// const age = req.body.age;
	// const genderId = req.body.genderId;
	// const height = req.body.height;
	// const isCriminal = req.body.isCriminal;
	// const crimeId = req.body.crimeId;
	// const photo = req.body.photo;

	try {
		db.query(
			"INSERT INTO users(first_name, middle_name, last_name, age, gender_id, height_inch, isCriminal, crime_id, photo) VALUES(?,?,?,?,?,?,?,?,?);",
			[
				firstName,
				middleName,
				lastName,
				age,
				genderId,
				height,
				isCriminal,
				crimeId,
				photo,
			],
			(error, result) => {
				if (error) console.log(error);
				res.send(result);
			}
		);
	} catch {
		console.log("Error running query!");
	}
});
module.exports = router;

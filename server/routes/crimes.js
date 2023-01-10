const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("all crimes");
});

module.exports = router;

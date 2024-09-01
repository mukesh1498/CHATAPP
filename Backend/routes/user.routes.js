const express = require("express");
const protecteRoute = require("../middleware/protectRoute");
const getuserforsidder = require("../contollers/user.controller");
const router = express.Router();

router.get("/", protecteRoute, getuserforsidder);

module.exports = router;

const express = require("express");
const { userRegistrationValidator } = require("../validation/user.validation");
const { runValidation } = require("../validation/run.validation");
const {createUser} = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", userRegistrationValidator, runValidation,createUser)

module.exports = router;
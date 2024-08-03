const express = require("express")
const user = require("../controllers/auth_controller.js")
const signupSchema = require("../validators/auth_validator.js")
const validat = require("../middlewears/validate_middllwear.js")
const loginSchema = require("../validators/login_validator.js")
const authmiddlewear = require("../middlewears/auth_middlewear.js")
const otp = require("../middlewears/otp_middlewear.js")

const router = express.Router()

router.route("/register").post(validat(signupSchema),user.register)
router.route("/login").post(validat(loginSchema),user.login)
router.route("/user").get(authmiddlewear,user.user)
router.route("/otp").post(user.otp)




module.exports = router
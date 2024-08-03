const express = require("express")

const router = express.Router()
const validat = require("../middlewears/validate_middllwear.js")
const itemschema = require("../validators/item_validator.js")
const item = require("../controllers/item_controller.js")
const authmiddlewear = require("../middlewears/auth_middlewear.js")


router.route("/item").post(validat(itemschema),item.itemAdd)
router.route("/useritem/:id").get(item.itemGet)
router.route("/deleteitem/:id").get(item.itemDelete)


module.exports = router
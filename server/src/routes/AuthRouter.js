const {Router} = require("express")

const validate = require("../middlewares/validate")
const authController = require("../controllers/AuthController")
const shemaValidatorForLogin = require("../itemsValidators/shemaValidatorForLogin")
const auth = require("../middlewares/auth")

const router = Router()

router.post("/login", validate([shemaValidatorForLogin]), authController.login)
router.get("/check", auth, authController.check)

module.exports = router
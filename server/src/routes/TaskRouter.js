const {Router} = require("express")

const validate = require("../middlewares/validate")
const shemaValidatorForTask = require("../itemsValidators/shemaValidatorForTask")
const queryValidatorsForGetTasks = require("../itemsValidators/queryValidatorsForGetTasks")
const shemaValidatorForUpdate = require("../itemsValidators/shemaValidatorForUpdate")
const taskController = require("../controllers/TaskController")
const auth = require("../middlewares/auth")
const checkExistTaskById = require("../middlewares/checkExistTaskById")

const router = Router()

router.get("/", validate(queryValidatorsForGetTasks), taskController.get)
router.post("/create", validate([shemaValidatorForTask]) , taskController.create)
router.put("/done/:id", auth, checkExistTaskById, taskController.done)
router.put("/edit/:id", validate([shemaValidatorForUpdate]) , auth, checkExistTaskById, taskController.changeValue)

module.exports = router
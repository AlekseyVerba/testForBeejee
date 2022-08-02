const taskService = require("../services/TaskService")

module.exports = async (req, res, next) => {
    const { id } = req.params
    const isExistTask = await taskService.isExistTask(id)

    if (!isExistTask) {
        return res.status(404).json({status: false, message: "Задача не найдена"})
    }

    next()
}
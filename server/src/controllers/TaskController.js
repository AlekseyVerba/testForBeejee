const taskService = require("../services/TaskService")

class TaskController {
    
    async create(req, res) {
        const newTask = await taskService.create(req.body)

        return res.status(201).json({status: true, message: "Задача успешно создана", data: {task: newTask}})
    }

    async get(req, res) {
        const {tasks, count} = await taskService.get(req.query)

        return res.status(200).json({status: true, message: "Задачи получены", data: {tasks, count}})
    }

    async done(req, res) {
        const { id } = req.params
        
        await taskService.updateTask(id, {status: true})

        return res.status(200).json({status: true, message: "Задача выполнена"})
    }

    async changeValue(req, res) {
        const { id } = req.params
        const { value } = req.body

        await taskService.updateTask(id, {value, isEdit: true})

        return res.status(200).json({status: true, message: "Текст изменен"})
    }

}

module.exports = new TaskController()
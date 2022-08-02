const TaskModel = require("../database/models/task")

class TaskService {

    async create({name, email, value}) {
        return await TaskModel.create({
            userName: name,
            userEmail: email,
            value
        })
    }    

    async get({order, sortBy, offset}) {
        const count = await TaskModel.count()
        const tasks = await TaskModel.findAll({offset,limit: 3, order: [[order, sortBy]]})
        
        return {tasks, count}
    }

    async isExistTask(id) {
        const candidate = await TaskModel.findOne({where: {id}, attributes: ["id"]})

        return !!candidate

    }

    async updateTask(id, newProperty) {
        return await TaskModel.update({...newProperty, isEdit: true}, {where: {id}})
    }

}

module.exports = new TaskService()
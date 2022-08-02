const { DataTypes } = require("sequelize")
const sequelize = require("../")

const TaskModel = sequelize.define("Task", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isEdit: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})

module.exports = TaskModel

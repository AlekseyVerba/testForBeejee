const { DataTypes } = require("sequelize")
const sequelize = require("../")

const UserModel = sequelize.define("User", {
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: false
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false
        },
        
    },
}, {
    timestamps: false,
    scopes: {
        withoutPassword: {
            attributes: { exclude: ['password'] },
        }
    }
})

module.exports = UserModel

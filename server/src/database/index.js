const { Sequelize } = require("sequelize")
const process = require("process")
const env = process.env

const sequelize = new Sequelize("todo", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres"
})


module.exports = sequelize
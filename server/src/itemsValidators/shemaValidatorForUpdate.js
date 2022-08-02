const { checkSchema } = require("express-validator")
const { notEmptyAndString } = require("./kitPropertyValidators")

module.exports = checkSchema({
    value: notEmptyAndString
})
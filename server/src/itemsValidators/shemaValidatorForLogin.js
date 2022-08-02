const { checkSchema } = require("express-validator")
const messagesForValidation = require("../constants/messagesForValidation")
const { notEmptyAndString } = require("./kitPropertyValidators")

module.exports = checkSchema({
    login: notEmptyAndString,
    password: {
        ...notEmptyAndString,
        isLength: {
            options: {min: 3, max: 12},
            errorMessage: messagesForValidation.isLength(3, 12)
        }
    }
})
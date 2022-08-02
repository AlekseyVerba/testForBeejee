const { checkSchema } = require("express-validator")
const messagesForValidation = require("../constants/messagesForValidation")
const { notEmptyAndString } = require("./kitPropertyValidators")

module.exports = checkSchema({
    name: notEmptyAndString,
    email: {
        isEmail: {
            errorMessage: messagesForValidation.isEmail
        }
    },
    value: notEmptyAndString
})
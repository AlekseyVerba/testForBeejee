const messagesForValidation = require("../constants/messagesForValidation")

module.exports = {
    notEmptyAndString: {
        isString: {
            errorMessage: messagesForValidation.isString
        },
        notEmpty: {
            errorMessage: messagesForValidation.notEmpty
        }
    }
}
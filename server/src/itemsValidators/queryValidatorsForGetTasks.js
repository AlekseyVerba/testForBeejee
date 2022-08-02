const messagesForValidation = require("../constants/messagesForValidation")
const { query } = require("express-validator")

const arrOrder = ["userName", "userEmail", "status"]
const arrSortBy = ["ASC", "DESC"]

module.exports = [
    query("order").isIn(arrOrder).withMessage(messagesForValidation.isIn(arrOrder)),
    query("sortBy").isIn(arrSortBy).withMessage(messagesForValidation.isIn(arrSortBy)),
    query("offset").isInt().withMessage(messagesForValidation.isInt)
]
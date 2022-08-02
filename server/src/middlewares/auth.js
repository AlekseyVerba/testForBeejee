const { verify } = require('jsonwebtoken');
const { secretTokenForJWT } = require("../constants")

module.exports = (req, res, next) => {

    if (req.method === "OPTIONS") {
        return next()
    }
    
    try {
        let token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return res.status(401).json({status: false, message: "Необходимо авторизоваться"})
        }

        const decode = verify(token, secretTokenForJWT)
        req.user = decode

        next()
    } catch(e) {
        return res.status(401).json({status: false, message: "Необходимо авторизоваться"})
    }

}
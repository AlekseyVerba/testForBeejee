const userService = require("../services/UserSevice")
const { compareSync } = require("bcryptjs")
const { sign } = require('jsonwebtoken');
const { secretTokenForJWT } = require("../constants")


class AuthService {

    async login({login, password}) {
        const candidate = await userService.getByLogin(login, true)
        console.log(candidate)
        if(!candidate) return false

        const isEqualPasswords = compareSync(password, candidate.password)

        if (!isEqualPasswords) return false

        const user = userService.removePassword(candidate)
        const token = this.getToken({id: candidate.id, login: candidate.login})

        return {
            user,
            token
        }
    }

    async check(login) {
        const user = await userService.getByLogin(login)
        const token = this.getToken({id: user.id, login: user.login})

        return {
            user,
            token
        }
    }

    getToken(data) {
        return sign(data, secretTokenForJWT, { expiresIn: '1h' })
    }


}

module.exports = new AuthService()
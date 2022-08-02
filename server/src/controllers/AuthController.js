const authService = require("../services/AuthService")

class AuthController {

    async login(req, res) {
        const {login, password} = req.body
        const userWithToken = await authService.login({login, password})

        if (!userWithToken) {
            return res.status(401).json({status: false, message: "Логин или пароль не подходит"})
        }

        return res.status(200).json({status: true, message: "Успешно", data: userWithToken})
    }

    async check(req, res) {
        const userWithToken = await authService.check(req.user.login)

        return res.status(200).json({status: true, message: "Успешно", data: userWithToken})
    }

 

}

module.exports = new AuthController()
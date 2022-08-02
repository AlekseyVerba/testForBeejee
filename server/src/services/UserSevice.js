const { hashSync } = require("bcryptjs")
const UserModule = require("../database/models/user")

class UserService {

    async create({login, password}) {
        
        const candidate = await UserModule.findOne({where: {login}, attributes: ["id"]})

        if (candidate) {
            console.log("Пользователь уже создан")
            return false
        }

        const hashPassword = hashSync(password, 8)
        const newUser = await UserModule.create({login, password: hashPassword})
        delete newUser.password

        return newUser
    }

    async getByLogin(login, withPassword = false) {
        const scope = withPassword ? "" : 'withoutPassword'

        return await UserModule.scope(scope).findOne({where: {login}})
    }

    removePassword(user) {
        const userNew = JSON.parse(JSON.stringify({...user.dataValues}))
        delete userNew.password
        
        return userNew
    }

}

module.exports = new UserService()
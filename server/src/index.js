const express = require("express")
const sequelize = require("./database")
const routers = require("./routes")
const userService = require("./services/UserSevice")
const cors = require("cors")

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use("/tasks", routers.taskRouter)
app.use("/auth", routers.authRouter)

sequelize.sync({ force: true }).then(() => {
    userService.create({login: "admin", password: "123"})
    app.listen(PORT, () => console.log(`Server started on ${PORT} server`))
})


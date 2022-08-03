import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useActions } from "../../hooks/useActions"
import { LOCAL_USER } from "../../constants"
import "./index.scss"

const Navbar = () => {

    const { user } = useSelector(state => state.user)
    const { actionChangeUser } = useActions()

    const logout = () => {
        localStorage.removeItem(LOCAL_USER)
        actionChangeUser(null)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Todo</Link>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        {
                            !user && <li className="nav-item">
                                <Link className="nav-link" to="/auth">Авторизация</Link>
                            </li>
                        }

                        {
                            user && <li className="nav-item">
                                <a className="nav-link nav-link--button" onClick={logout}>Выйти</a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
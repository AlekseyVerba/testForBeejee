import React from "react";
import Input from "../Input";
import Button from "../Button";
import { useSelector } from "react-redux"

const FormLogin = ({ loginInput, passwordInput, buttonIsDisabled, submit }) => {

    const { success, error, loadingUser } = useSelector(state => state.user)

    return (
        <div className="form page">
            <h1>Авторизация</h1>
            <Input nameLabel="Ваш логин" placeholder="Логин"
                value={loginInput.value}
                validErrorMessage={loginInput.errors}
                blur={loginInput.handlerChangeBlur}
                change={loginInput.changeHadnlerInput}
                isClearBlur={loginInput.isClearBlur}
            />
            <Input nameLabel="Ваш пароль" typeInput="password" placeholder="Пароль"
                value={passwordInput.value}
                validErrorMessage={passwordInput.errors}
                blur={passwordInput.handlerChangeBlur}
                change={passwordInput.changeHadnlerInput}
                isClearBlur={passwordInput.isClearBlur}
            />

            {success && <div className="message message--success">{success}</div>}
            {error && <div className="message message--error">{error}</div>}

            <div>
                <Button text="Войти" styleButton="btn-success" event={submit} disabled={!buttonIsDisabled} loading={loadingUser} />
            </div>
        </div>
    )
}

export default FormLogin
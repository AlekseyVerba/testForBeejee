import { URL_HTTP, LOCAL_USER } from "../constants/"

export async function requestGETOrDELETE(url, method = "GET") {

    let authToken = localStorage.getItem(LOCAL_USER)

    let headers = {}

    if (authToken) {
        headers = Object.assign({}, headers, { 'Authorization': 'Bearer ' + authToken })
    }

    const res = await fetch(`${URL_HTTP}/${url}`, {
            method,
            headers
        }
    )

    const data = await res.json()

    if (!data) {
        throw new Error(`Ошибка запроса по "${URL_HTTP}/${url}"`)
    }

    return data
}

export async function requestPostOrPut({ url, body, auth = false, method = "POST" }) {

    let authToken = localStorage.getItem(LOCAL_USER)

    let headers = {
        'Content-Type': 'application/json'
    }

    if (auth && !authToken) {
        throw new Error("Вы не авторизованы")
    } else if (auth) {
        headers = Object.assign({}, headers, { 'Authorization': 'Bearer ' + authToken })
    }

    const bodyJson = JSON.stringify(body)

    const res = await fetch(`${URL_HTTP}/${url}`, {
        method,
        body: bodyJson,
        headers
    })

    const data = await res.json()

    console.log(data)

    if (!data) {
        throw new Error(`Ошибка запроса по "${URL_HTTP}/${url}"`)
    }

    return data
}
import history from "../history"
import {post} from '../helpers/ajax'

export const type = {
    CHANGE_EMAIL: "LOGIN_CHANGE_EMAIL",
    CHANGE_PASSWORD: "LOGIN_CHANGE_PASSWORD",
    CHANGE_MESSAGE: "LOGIN_CHANGE_MESSAGE",
    CHANGE_LOADING: "LOGIN_CHANGE_LOADING",
    RESET: "LOGIN_RESET",
}

export const change_email = (value) => ({
    type: type.CHANGE_EMAIL,
    value
})

export const change_password = (value) => ({
    type: type.CHANGE_PASSWORD,
    value,
})

export const change_message = (value) => ({
    type: type.CHANGE_MESSAGE,
    value,
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})

export const on_login = (event) => {
    return async (dispatch, getState) => { 
        event.preventDefault()
        const state = getState()
        const {
            email, 
            password
        } = state.login

        dispatch(change_loading(true))

        if (!email) { 
            dispatch(change_loading(false))
            dispatch(change_message("Email must not empty"))
            return 
        }

        if (!password) { 
            dispatch(change_loading(false))
            dispatch(change_message("Password must not empty"))
            return 
        }

        const data = await post('https://sembako-api.archv.id/api/users/v1/sign-in', {
            username: email,
            password: password
        })

        dispatch(change_loading(false))

        console.log("data", data)

        const code = data.resultCode
        const message = data.resultDesc

        if (code) { 
            dispatch(change_message(message))
            return
        }

        const { 
            token,
            tokenExpiry,
            tokenRefresh,
            tokenRefreshExpiry,
        } = data.content.auth

        localStorage.setItem("token", token)
        localStorage.setItem("tokenRefresh", tokenRefresh)

        history.push("/")

        dispatch({
            type: type.RESET
        })
    }
}

export default type
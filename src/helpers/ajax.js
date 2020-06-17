import axios from 'axios'
import { Alert } from 'rsuite'
import history from '../history'

async function signout() { 
    history.push("/login")
}

function onError(error) {
    if ( !error || !error.response ) { 
        if ( !window.navigator.onLine ) { 
            console.log("onLine", window.navigator.onLine)
            Alert.error("No internet connection")
        }
        throw false
    }
 
    if (error.response.status == 401) {
        signout()
    } else if (error.response.status == 400) {
        return error.response.data
    } else { 
        Alert.error("Connection error")
        throw false
    }
}


export async function post(url, params) {
    return axios.post(url, params).then((value) => value.data).catch(onError)
}

export async function get(url, params) {
    return axios.get(url, {params}).then((value) => value.data).catch(onError)
}

export async function Delete(url, params) { 
    return axios.delete(url, params).then((value) => value.data).catch(onError)
}


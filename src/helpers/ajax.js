import axios from 'axios'
import { Alert } from 'rsuite'
import history from '../history'
import getToken from '../helpers/getToken'

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
    } else if (error.response.status == 400 ) {
        return error.response.data
    } else if (error.response.status == 404) { 
        return false
    } else { 
        Alert.error("Connection error")
        throw false
    }
}

function getInstance() {
    const token = getToken()
    var headers = {}

    if( token ) { 
        headers = {
            Authorization: `Bearer ${token}`,
        }
    }

    return axios.create({
        headers
    });
}


export async function post(url, params) {
    return getInstance().post(url, params).then((value) => value.data).catch(onError)
}

export async function get(url, params) {
    return getInstance().get(url, {params}).then((value) => value.data).catch(onError)
}

export async function Delete(url, params) { 
    return getInstance().delete(url, params).then((value) => value.data).catch(onError)
}


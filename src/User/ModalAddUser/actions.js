import { Alert } from "rsuite"
import {post, get} from '../../helpers/ajax'

import {get_data} from '../actions'

const key = "ModalAddUser"

export const type = {
    CHANGE_NAME: `${key}_CHANGE_NAME`,
    CHANGE_EMAIL: `${key}_CHANGE_EMAIL`,
    CHANGE_PHONE: `${key}_CHANGE_PHONE`,
    CHANGE_PASSWORD: `${key}_CHANGE_PASSWORD`,
    CHANGE_RE_PASSWORD: `${key}_CHANGE_RE_PASSWORD`,
    CHANGE_POB: `${key}_CHANGE_POB`,
    CHANGE_DOB: `${key}_CHANGE_DOB`,
    CHANGE_ROLE: `${key}_CHANGE_ROLE`,
    CHANGE_PROVINCE_ID: `${key}_CHANGE_PROVINCE_ID`,
    CHANGE_SECTOR_ID: `${key}_CHANGE_SECTOR_ID`,

    CHANGE_PROVINCE_DATA: `${key}_CHANGE_PROVINCE_DATA`,
    CHANGE_SECTOR_DATA: `${key}_CHANGE_SECTOR_DATA`,

    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_AFTER: `${key}_CHANGE_AFTER`,
    RESET: `${key}_RESET`,
}

export const change_province_data = (value) => ({
    type: type.CHANGE_PROVINCE_DATA,
    value
})

export const get_province_data = (event) => {
    return async (dispatch, getState) => {
        dispatch(change_loading(true))

        const data = await get(`https://sembako-api.archv.id/api/region/v1/`)
        var provinces = []
        if (data) {
            provinces = data.content.region
        }        

        dispatch(change_province_data(provinces || []))
        dispatch(change_loading(false))
    }}

export const change_name = (value) => ({
    type: type.CHANGE_NAME,
    value
})

export const change_email = (value) => ({
    type: type.CHANGE_EMAIL,
    value
})

export const change_phone = (value) => ({
    type: type.CHANGE_PHONE,
    value
})

export const change_password = (value) => ({
    type: type.CHANGE_PASSWORD,
    value
})

export const change_re_password = (value) => ({
    type: type.CHANGE_RE_PASSWORD,
    value
})

export const change_pob = (value) => ({
    type: type.CHANGE_POB,
    value
})

export const change_dob = (value) => ({
    type: type.CHANGE_DOB,
    value
})

export const change_role = (value) => ({
    type: type.CHANGE_ROLE,
    value
})

export const set_province_id = (value) => ({
    type: type.CHANGE_PROVINCE_ID,
    value
})

export const change_sector_data = (value) => ({
    type: type.CHANGE_SECTOR_DATA,
    value
})

export const change_province_id = (value) => {
    return async (dispatch, getState) => {
        dispatch(set_province_id(value))
        dispatch(change_loading(true))

        var params = {
            province_id:value,
        }

        const data = await get(`https://sembako-api.archv.id/api/region/v1/`, params)

        var sectors = []
        if (data) {
            sectors = data.content.region
        }        

        dispatch(change_sector_data(sectors || []))
        dispatch(change_loading(false))
    }
}

export const change_sector_id = (value) => ({
    type: type.CHANGE_SECTOR_ID,
    value
})

export const toogle_open = () => ({
    type: type.TOOGLE_OPEN,
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})

export const change_after = (value) => ({
    type: type.CHANGE_AFTER,
    value,
})


export const reset = () => ({
    type: type.RESET,
})

export const on_save = (event) => {
    return async (dispatch, getState) => { 
        event && event.preventDefault()
        const state = getState()
        
        const {
            name,
            email,
            phone,
            password,
            re_password,
            pob,
            dob,
            role,
            province_id,
            sector_id,
            after,
        } = state.modalAddUser

        if (!name || !email || !phone || !password || !re_password || !pob || !dob || !role || !province_id || !sector_id ) { 
            Alert.error('Required field is missing')
            return 
        }

        if (password != re_password) { 
            Alert.error('Konfirmasi password salah')
            return 
        }

        dispatch(change_loading(true))

        await post('https://sembako-api.archv.id/api/users/v1/register', {
            "email": email,
            "password": password,
            "name": name,
            "pob": pob,
            "dob": dob,
            "phone": phone,
            "role": role,
            "province_id": province_id,
            "sector_id": sector_id
        })

        dispatch(change_loading(false))
        after && after()
        dispatch(change_after(false))
        dispatch(toogle_open())
        dispatch(get_data())
        dispatch(reset())
        
        return 
    }
}

export default type
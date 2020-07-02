import { Alert } from "rsuite"
import {get} from '../../helpers/ajax'

const key = "modalDetailUser"

export const type = {
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_AFTER: `${key}_CHANGE_AFTER`,
    RESET: `${key}_RESET`,
}


export const show_detail = (id) => { 
    return async (dispatch, getState) => {
        dispatch(toogle_open())
        dispatch(change_loading(true))

        const data = await get(`https://sembako-api.archv.id/api/users/v1/${id}`)
        let user = {}
        if(data){
            user = data.content
        }
        
        dispatch(change_data(user))
        dispatch(change_loading(false))
    }
}

export const change_data = (value) => ({
    type: type.CHANGE_DATA,
    value,
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


export default type
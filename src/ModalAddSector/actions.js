import {post} from '../helpers/ajax'
import { Alert } from "rsuite"

const key = "ModalAddSector"

export const type = {
    CHANGE_NAME: `${key}_CHANGE_NAME`,
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_PROVINSI_ID: `${key}_CHANGE_PROVINSI_ID`,
    CHANGE_PROVINSI_NAME: `${key}_CHANGE_PROVINSI_NAME`,
    RESET: `${key}_RESET`,
}

export const change_name = (value) => ({
    type: type.CHANGE_NAME,
    value
})

export const toogle_open = () => ({
    type: type.TOOGLE_OPEN,
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})

export const change_provinsi_id = (value) => ({
    type: type.CHANGE_PROVINSI_ID,
    value
})

export const change_provinsi_name = (value) => ({
    type: type.CHANGE_PROVINSI_NAME,
    value
})

export const reset = () => ({
    type: type.RESET,
})

export const on_open = ({provinsi_id, provinsi_name}) => {
    return async (dispatch, getState) => { 
        dispatch(toogle_open())
        dispatch(change_provinsi_id(provinsi_id))
        dispatch(change_provinsi_name(provinsi_name))
    }
}

export const on_save = (event) => {
    return async (dispatch, getState) => { 
        event && event.preventDefault()
        const state = getState()
        const {
            name, 
            provinsi_id,
        } = state.modalAddSector

        if (!name) { 
            Alert.error('Name must not empty')
            return 
        }

        dispatch(change_loading(true))



        dispatch(change_loading(false))
        dispatch(toogle_open())

        return 
    }
}

export default type
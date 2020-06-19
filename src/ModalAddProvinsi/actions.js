import {post} from '../helpers/ajax'
import { Alert } from "rsuite"

const key = "ModalAddProvinsi"

export const type = {
    CHANGE_NAME: `${key}_CHANGE_NAME`,
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
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


export const reset = () => ({
    type: type.RESET,
})

export const on_save = (event) => {
    return async (dispatch, getState) => { 
        event && event.preventDefault()
        const state = getState()
        const {
            name, 
        } = state.modalAddProvinsi

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
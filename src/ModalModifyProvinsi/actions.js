import { Alert } from "rsuite"

const key = "ModalModifyProvinsi"

export const type = {
    CHANGE_NAME: `${key}_CHANGE_NAME`,
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_MODIFY_ID: `${key}_CHANGE_MODIFY_ID`,
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

export const change_modify_id = (value) => ({ 
    type: type.CHANGE_MODIFY_ID,
    value,
})

export const reset = () => ({
    type: type.RESET,
})

export const on_modify = ({
    id,
    name,
    ...res
}, ...rest) => { 
    return (dispatch) => { 
        console.log("res", res, rest)
        dispatch(toogle_open())
        dispatch(change_name(name))
        dispatch(change_modify_id(id))
    }
}

export const on_save = (event) => {
    return async (dispatch, getState) => { 
        event && event.preventDefault()
        const state = getState()
        const {
            name, 
            modify_id,
        } = state.modalModifyProvinsi

        if (!name) { 
            Alert.error('Name must not empty')
            return 
        }

        dispatch(change_loading(true))

        console.log("modify_id", modify_id)

        dispatch(change_loading(false))
        dispatch(toogle_open())

        return 
    }
}

export default type
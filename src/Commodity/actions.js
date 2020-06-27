import {get} from '../helpers/ajax'

const key = "Comodity"

export const type = {
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
}

export const change_data = (value) => ({
    type: type.CHANGE_DATA,
    value
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})

export const get_data = (value) => { 
    return async (dispatch, getState) => { 
        dispatch(change_loading(true))

        const data = await get(`https://sembako-api.archv.id/api/commodity/v1/`)
        var comodities = []
        if (data) {
            comodities = data.content
        }

        dispatch(change_data(comodities || []))
        dispatch(change_loading(false))
    }
}

export const on_delete_modal_togle = () => ({
    type: type.TOOGLE_OPEN,
})

export const on_delete_confirm = (data) => { 
    return async (dispatch, getState) => { 
        dispatch(on_delete_modal_togle())
    }
}

export const on_delete = (data) => { 
    return async (dispatch, getState) => {

    }
}


export default type
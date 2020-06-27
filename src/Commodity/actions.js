import {get, Delete} from '../helpers/ajax'
import {Alert} from "rsuite"

const key = "Commodity"

export const type = {
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    CHANGE_DATA_DETAIL:`${key}_CHANGE_DATA_DETAIL`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_AFTER: `${key}_CHANGE_AFTER`,
}

export const change_data = (value) => ({
    type: type.CHANGE_DATA,
    value
})

export const change_after = (value) => ({
    type: type.CHANGE_AFTER,
    value,
})

export const change_data_detail = (value) => ({
    type: type.CHANGE_DATA_DETAIL,
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

export const on_delete_confirm = (detail) => { 
    return async (dispatch, getState) => {
        dispatch(change_data_detail(detail || {}))
        dispatch(on_delete_modal_togle())
    }
}

export const on_delete_modal_togle = () => ({
    type: type.TOOGLE_OPEN,
})

export const on_delete = (event) => { 
    return async (dispatch, getState) => { 
        event && event.preventDefault()
        const state = getState()

        // const data = await Delete(`https://sembako-api.archv.id/api/commodity/v1/`)
        Alert.success("action hapus finished (belum hit endpoint)");
        
        const {
            detail,
            after,
        } = state.commodity
        dispatch(on_delete_modal_togle())
        after && after()
        dispatch(change_after(false))
    }
}


export default type
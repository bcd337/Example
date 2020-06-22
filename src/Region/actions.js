import {get} from '../helpers/ajax'
import {Alert} from 'rsuite'

export const REGION_TYPE = [ 
    "province",
    "sector",
    "agent",
    "agent_child"
]

const key = "ModalAddProvinsi"

export const type = {
    CHANGE_REGION_LIST: `${key}_CHANGE_REGION_LIST`,
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    ADD_REGION_LIST: `${key}_ADD_REGION_LIST`,
    SLICE_REGION_LIST: `${key}_SLICE_REGION_LIST`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    RESET: `${key}_RESET`,
}

export const change_region_list = (value) => ({
    type: type.CHANGE_REGION_LIST,
    value
})

export const change_data = (value) => ({
    type: type.CHANGE_DATA,
    value,
})

export const add_region_list = (value) => ({
    type: type.ADD_REGION_LIST,
    value,
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})

export const reset = () => ({
    type: type.RESET,
})

export const on_detail = (data) => { 
    return (dispatch, getState) => { 
        console.log("data", data)

        dispatch(add_region_list(data))
        dispatch(get_data())
    }
}


export const slice_region_list = (value) => { 
    return (dispatch, getState) => { 
        dispatch({
            type: type.SLICE_REGION_LIST,
            value
        })

        dispatch(get_data())
    }
}

export const get_data = () => { 
    return async (dispatch, getState) => { 
        const state = getState()
        const { 
            region_list
        } = state.region

        const params = {}
        
        if (region_list.length > 0) { 
            const region_type = get_region_type(REGION_TYPE, region_list)
            const region_type_id = region_list[region_list.length-1].id
    
            params[`${region_type}_id`] = region_type_id
        }
        
        dispatch(change_loading(true))

        const data = await get(`https://sembako-api.archv.id/api/region/v1`, params)
        var region = []
        if (data) {
            region = data.content.region
        }

        dispatch(change_data(region || []))
        dispatch(change_loading(false))

    }
}

export function get_region_type(type, list) { 
    if (type.length < list.length) { 
        return type[type.length-1]
    }

    return type[list.length-1]
}

export default type
import {Alert} from 'rsuite'

export const REGION_TYPE = [ 
    "province",
    "sector",
    "agent"
]

const key = "ModalAddProvinsi"

export const type = {
    CHANGE_REGION_LIST: `${key}_CHANGE_REGION_LIST`,
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    ADD_REGION_LIST: `${key}_ADD_REGION_LIST`,
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


export const get_data = () => { 
    return (dispatch, getState) => { 
        const state = getState()
        const { 
            region_list
        } = state.region

        const params = {}
        
        if (region_list.length > 0) { 
            const region_type = get_region_type(REGION_TYPE, region_list)
            const region_type_id = region_list[region_list.length-1]
    
            params[`${region_type}_id`] = region_type_id
        }
        
        console.log(`get`, params)

        dispatch(change_data([
            {
                id: 1,
                name: "Sumatera Utara"
            }, {
                id: 2,
                name: "Sumatera Barat"
            }, {
                id: 3,
                name: "Riau"
            }, {
                id: 4,
                name: "Sumatera Selatan"
            }
        ]))

    }
}

export function get_region_type(type, list) { 
    if (type.length < list.length) { 
        return type[type.length-1]
    }

    return type[list.length-1]
}

export default type
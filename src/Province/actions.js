import {Alert} from 'rsuite'

export const PROVINCE_TYPE = [ 
    "province",
    "sector",
    "agent"
]

const key = "ModalAddProvinsi"

export const type = {
    CHANGE_PROVINCE_LIST: `${key}_CHANGE_PROVINCE_LIST`,
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    ADD_PROVINCE_LIST: `${key}_ADD_PROVINCE_LIST`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    RESET: `${key}_RESET`,
}

export const change_province_list = (value) => ({
    type: type.CHANGE_PROVINCE_LIST,
    value
})

export const change_data = (value) => ({
    type: type.CHANGE_DATA,
    value,
})

export const add_province_list = (value) => ({
    type: type.ADD_PROVINCE_LIST,
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

        dispatch(add_province_list(data))
        dispatch(get_data())
    }
}


export const get_data = () => { 
    return (dispatch, getState) => { 
        const state = getState()
        const { 
            province_list
        } = state.province

        const params = {}
        
        if (province_list.length > 0) { 
            const province_type = get_province_type(PROVINCE_TYPE, province_list)
            const province_type_id = province_list[province_list.length-1]
    
            params[`${province_type}_id`] = province_type_id
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

export function get_province_type(type, list) { 
    if (type.length < list.length) { 
        return type[type.length-1]
    }

    return type[list.length-1]
}

export default type
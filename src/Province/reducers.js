import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_DATA:
            return {
                ...state,
                data: action.value
            }
        case type.ADD_PROVINCE_LIST: 
            return { 
                ...defaultState(),
                province_list: [
                    ...state.province_list,
                    action.value
                ]
            }
        case type.CHANGE_PROVINCE_LIST: 
            return {
                ...state,
                province_list: action.value
            }
        case type.CHANGE_LOADING: 
            return { 
                ...state,
                loading: action.value
            }
        case type.RESET: 
            return { 
                ...defaultState()
            }
        default:
            return state
    }
}

const defaultState = () => ({
    data: [ {
        id: 1,
        name: "Sumatera Utara"
    }],
    province_list: [],
    loading: false,
})

export default main
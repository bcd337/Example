import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_DATA:
            return {
                ...state,
                data: action.value
            }
        case type.ADD_REGION_LIST: 
            return { 
                ...defaultState(),
                region_list: [
                    ...state.region_list,
                    action.value
                ]
            }
        case type.CHANGE_REGION_LIST: 
            return {
                ...state,
                region_list: action.value
            }
        case type.SLICE_REGION_LIST: 
            return { 
                ...state,
                region_list: state.region_list.slice(0, action.value + 1)
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
    region_list: [],
    loading: false,
})

export default main
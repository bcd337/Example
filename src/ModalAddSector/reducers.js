import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_NAME:
            return {
                ...state,
                name: action.value
            }
        case type.TOOGLE_OPEN: 
            return { 
                ...defaultState(),
                open: !state.open
            }
        case type.CHANGE_LOADING: 
            return { 
                ...state,
                loading: action.value
            }
        case type.CHANGE_PROVINSI_ID:
            return { 
                ...state,
                provinsi_id: action.value,
            }
        case type.CHANGE_PROVINSI_NAME:
            return { 
                ...state,
                provinsi_name: action.value,
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
    name: "",
    open: false,
    loading: false,
    provinsi_id: 0,
    provinsi_name: "",
})

export default main
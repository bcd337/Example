import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_NAME:
            return {
                ...state,
                name: action.value
            }
        case type.CHANGE_COMMODITY_TYPE:
            return {
                ...state,
                comodity_type: action.value
            }
        case type.CHANGE_AFTER: 
            return {
                ...state,
                after: action.value,
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
    comodity_type:"",
    open: false,
    loading: false,
    after: false,
})

export default main
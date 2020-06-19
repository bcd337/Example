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
        case type.CHANGE_MODIFY_ID:
            return { 
                ...state,
                modify_id: action.value
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
    modify_id: 0,
})

export default main
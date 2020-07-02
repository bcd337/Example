import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_DATA:
            return {
                ...state,
                detail_user: action.value
            }
        
        case type.TOOGLE_OPEN: 
            return { 
                ...state,
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
    detail_user:{},
    open: false,
    loading: false,
    after: false,
})

export default main
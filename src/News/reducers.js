import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_DATA:
            return {
                ...state,
                data: action.value
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
        case type.CHANGE_PAGE:
            return { 
                ...state,
                page: action.value,
            }
        case type.CHANGE_FILTER_APPROVE:
            return { 
                ...state,
                filter_approve: action.value,
            }
        case type.CHANGE_FILTER_NOT_APPROVE:
            return { 
                ...state,
                filter_not_approve: action.value,
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
    data: [],
    open: false,
    loading: true,
    page: 1,
    filter_approve: true,
    filter_not_approve: true,
    max: 10,
})

export default main
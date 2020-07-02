import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_DATA:
            return {
                ...state,
                data: action.value.user,
                total_data: action.value.total_data,
                total_pages: Math.ceil(action.value.total_data/state.max)
            }
        case type.CHANGE_PAGE:
            return { 
                ...state,
                page: action.value,
            }                  
        case type.CHANGE_LOADING: 
            return { 
                ...state,
                data_loading: action.value
            }
        case type.CHANGE_AFTER: 
            return {
                ...state,
                after: action.value,
            }
        default:
            return state
    }
}

const defaultState = () => ({
    data: [],
    data_loading: true,
    max:20,
    page: 1,
    total_data:0,
    total_pages:1,

    after:false,
})

export default main
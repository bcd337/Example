import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_DATA:
            return {
                ...state,
                data: action.value
            }
        case type.CHANGE_DATA_DETAIL:
            return {
                ...state,
                detail: action.value
            }
        case type.TOOGLE_OPEN: 
            return { 
                ...state,
                modal_delete_is_open: !state.modal_delete_is_open
            }
        case type.CHANGE_AFTER: 
            return {
                ...state,
                after: action.value,
            }                     
        case type.CHANGE_LOADING: 
            return { 
                ...state,
                commodity_loading: action.value
            }
        default:
            return state
    }
}

const defaultState = () => ({
    data: [],
    detail:{},
    after:false,
    modal_delete_is_open:false,
    commodity_loading: true,
})

export default main
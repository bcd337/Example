import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_DATA:
            return {
                ...state,
                data: action.value
            }
        case type.CHANGE_LOADING: 
            return { 
                ...state,
                loading: action.value
            }
        default:
            return state
    }
}

const defaultState = () => ({
    data: [],
    loading: true,
})

export default main
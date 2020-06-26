import {get} from '../helpers/ajax'

const key = "IqbalApp"

export const type = {
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
}

export const change_data = (value) => ({
    type: type.CHANGE_DATA,
    value
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})

export const get_data = (value) => { 
    return async (dispatch, getState) => { 
        dispatch(change_loading(true))

        const data = await get(`https://reqres.in/api/users?page=2`)
        var news = []
        if (data) {
            news = data.data
        }

        dispatch(change_data(news || []))
        dispatch(change_loading(false))
    }
}

export default type
import {get, Delete} from '../helpers/ajax'

const key = "User"

export const type = {
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_PAGE: `${key}_CHANGE_PAGE`,
    CHANGE_AFTER: `${key}_CHANGE_AFTER`,
}

export const change_data = (value) => ({
    type: type.CHANGE_DATA,
    value
})

export const change_page = (value) => ({
    type: type.CHANGE_PAGE,
    value,
})

export const on_delete = (id) => { 
    return async (dispatch, getState) => {
        dispatch(change_loading(true))
        const data = await Delete(`https://sembako-api.archv.id/api/users/v1/${id}`)
        
        const state = getState()
        const { 
            page,
        } = state.user
        dispatch(get_data(page))
        dispatch(change_loading(false))
    }
}

export const get_data = (page = 1) => { 
    return async (dispatch, getState) => { 
        dispatch(change_page(page))
        const state = getState()
        const { 
            max,
            after
        } = state.user

        var params = {
            max,
            page,
        }
        

        dispatch(change_loading(true))

        const data = await get(`https://sembako-api.archv.id/api/users/v1/`, params)        

        var users_data = []

        if (data) {
            users_data = data.content
        }

        after && after()
        dispatch(change_after(false))
        dispatch(change_data(users_data || []))
        dispatch(change_loading(false))
    }
}

export const change_after = (value) => ({
    type: type.CHANGE_AFTER,
    value,
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})


export default type
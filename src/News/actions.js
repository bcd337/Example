import {get} from '../helpers/ajax'
import { Alert } from "rsuite"
import { change_id } from '../ModalNewsApprove/actions'

const key = "ModalAddSector"

export const type = {
    CHANGE_DATA: `${key}_CHANGE_DATA`,
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_PAGE: `${key}_CHANGE_PAGE`,
    CHANGE_FILTER_APPROVE: `${key}_CHANGE_FILTER_APPROVE`,
    CHANGE_FILTER_NOT_APPROVE: `${key}_CHANGE_FILTER_NOT_APPROVE`,
    RESET: `${key}_RESET`,
}

export const change_data = (value) => ({
    type: type.CHANGE_DATA,
    value
})

export const toogle_open = () => ({
    type: type.TOOGLE_OPEN,
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})

export const change_page = (value) => ({
    type: type.CHANGE_PAGE,
    value,
})

export const reset = () => ({
    type: type.RESET,
})

export const change_filter_approve = (value, checked) => {
    return async (dispatch, getState) => { 
        dispatch({
            type: type.CHANGE_FILTER_APPROVE,
            value: checked
        })

        dispatch(get_data())
    }
}

export const change_filter_not_approve = (value, checked) => {
    return async (dispatch, getState) => { 
        dispatch({
            type: type.CHANGE_FILTER_NOT_APPROVE,
            value: checked
        })

        dispatch(get_data())
    }
}

export const get_data = (page = 1) => { 
    return async (dispatch, getState) => { 
        dispatch(change_page(page))
        const state = getState()
        const { 
            max,
            filter_approve,
            filter_not_approve,
        } = state.news

        if (!filter_approve && !filter_not_approve) {
            console.log("nothing to show", filter_approve, filter_not_approve)
            dispatch(change_data([]))
            return 
        }

        var params = {
            max,
            page,
        }

        if ( filter_approve != filter_not_approve) { 
            if (filter_approve) { 
                params = { 
                    ...params,
                    status: 1,
                }
            } else { 
                params = { 
                    ...params,
                    status: 0,
                }
            }
        }

        dispatch(change_loading(true))

        const data = await get(`https://sembako-api.archv.id/api/news/v1`, params)
        var news = []
        if (data) {
            news = data.content.news
        }

        dispatch(change_data(news || []))
        dispatch(change_loading(false))
    }
}


export default type
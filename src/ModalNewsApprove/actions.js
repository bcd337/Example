import {post} from '../helpers/ajax'
import { Alert } from "rsuite"
import { change_name } from '../ModalAddSector/actions'

const key = "ModalNewsApprove"

export const type = {
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_ID: `${key}_CHANGE_ID`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_AFTER: `${key}_CHANGE_AFTER`,
    RESET: `${key}_RESET`,
}

export const toogle_open = () => ({
    type: type.TOOGLE_OPEN,
})

export const change_id = (value) => ({
    type: type.CHANGE_ID,
    value,
})

export const change_loading = (value) => ({
    type: type.CHANGE_LOADING,
    value,
})

export const change_after = (value) => ({
    type: type.CHANGE_AFTER,
    value,
})

export const reset = () => ({
    type: type.RESET,
})

export const on_open = ({id}, after) => {
    return async (dispatch, getState) => { 
        dispatch(toogle_open())
        dispatch(change_id(id))
        dispatch(change_after(after))
    }
}

export const on_approved = (event) => { 
    return async (dispatch, getState) => { 
        event && event.preventDefault()
        const state = getState()
        const {
            id,
            after,
        } = state.modalNewsApprove

        dispatch(change_loading(true))

        await post(`https://sembako-api.archv.id/api/news/v1/publish`, {id, status: 1})

        dispatch(change_loading(false))
        after && after()
        dispatch(change_after(false))
        dispatch(toogle_open())
    }
}

export const on_not_approved = (event) => { 
    return async (dispatch, getState) => { 
        event && event.preventDefault()
        const state = getState()
        const {
            id,
            after,
        } = state.modalNewsApprove

        dispatch(change_loading(true))

        await post(`https://sembako-api.archv.id/api/news/v1/publish`, {id, status: 0})

        dispatch(change_loading(false))
        after && after()
        dispatch(change_after(false))
        dispatch(toogle_open())
    }
}

export default type
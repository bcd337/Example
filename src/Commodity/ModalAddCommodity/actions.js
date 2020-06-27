import {post} from '../../helpers/ajax'
import { Alert } from "rsuite"

const key = "ModalAddCommodity"

export const type = {
    CHANGE_NAME: `${key}_CHANGE_NAME`,
    CHANGE_COMMODITY_TYPE: `${key}_CHANGE_COMMODITY_TYPE`,
    TOOGLE_OPEN: `${key}_TOOGLE_OPEN`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_AFTER: `${key}_CHANGE_AFTER`,
    RESET: `${key}_RESET`,
}

export const change_name = (value) => ({
    type: type.CHANGE_NAME,
    value
})

export const change_commodity_type = (value) => ({
    type: type.CHANGE_COMMODITY_TYPE,
    value
})

export const toogle_open = () => ({
    type: type.TOOGLE_OPEN,
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

export const on_save = (event) => {
    return async (dispatch, getState) => { 
        event && event.preventDefault()
        const state = getState()
        
        const {
            name,
            after,
        } = state.modalAddCommodity

        if (!name) { 
            Alert.error('Nama Harus diisi')
            return 
        }

        dispatch(change_loading(true))

        const data = await post('https://sembako-api.archv.id/api/commodity/v1', {
            type : 2,
            name: name,
            icon: "https://minio-global.archv.id/sembakopublic/icon/beras.png"
        })

        dispatch(change_loading(false))
        after && after()
        dispatch(change_after(false))
        dispatch(toogle_open())

        return 
    }
}

export default type
import {type} from './reducers'
import history from '../history'

export const toogle_open = () => ({
    type: type.TOOGLE_OPEN,
})

export const logout = () => {
    return (dispatch, getState) => { 
        localStorage.clear()
        history.push("/login")
    }
}


export default type
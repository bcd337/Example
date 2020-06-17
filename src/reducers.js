import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducers as home} from './Home'
import {reducers as sidebar} from './Sidebar'
import {reducers as login} from './Login'

const combine = combineReducers({
    home,
    sidebar,
    login, 
})

const store = createStore(
    combine,
    applyMiddleware(
        thunk,
        logger
    )
)

export default store
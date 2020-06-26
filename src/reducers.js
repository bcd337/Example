import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducers as home} from './Home'
import {reducers as sidebar} from './Sidebar'
import {reducers as login} from './Login'
import {reducers as region} from './Region'
import {reducers as news} from './News'
import {reducers as modalAddProvinsi} from './ModalAddProvinsi'
import {reducers as modalModifyProvinsi} from './ModalModifyProvinsi'
import {reducers as modalAddSector} from './ModalAddSector'
import {reducers as modalAddAgent} from './ModalAddAgent'
import {reducers as modalAddAgentChild} from './ModalAddAgentChild'
import {reducers as modalNewsApprove} from './ModalNewsApprove'

import {reducers as iqbalApp} from './IqbalApp'
import {reducers as commodity} from './Commodity'


const combine = combineReducers({
    home,
    sidebar,
    login, 
    region,
    news,
    modalAddProvinsi,
    modalModifyProvinsi,
    modalAddSector,
    modalAddAgent,
    modalAddAgentChild,
    modalNewsApprove,
    commodity,

    iqbalApp,
})

const store = createStore(
    combine,
    applyMiddleware(
        thunk,
        logger
    )
)

export default store
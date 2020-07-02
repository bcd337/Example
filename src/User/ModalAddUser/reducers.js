import type from './actions'
import formatDate from '../../helpers/date'


const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_NAME:
            return {
                ...state,
                name: action.value
            }
        case type.CHANGE_EMAIL:
            return {
                ...state,
                email: action.value
            }
        case type.CHANGE_PHONE:
            return {
                ...state,
                phone: action.value
            } 
        case type.CHANGE_PASSWORD:
            return {
                ...state,
                password: action.value
            }         
        case type.CHANGE_RE_PASSWORD:
            return {
                ...state,
                re_password: action.value
            }
        case type.CHANGE_POB:
            return {
                ...state,
                pob: action.value
            }
        
        case type.CHANGE_DOB:
            return {
                ...state,
                dob: formatDate(action.value)
            }
        case type.CHANGE_ROLE:
            return {
                ...state,
                role: action.value
            }
        case type.CHANGE_PROVINCE_ID:
            return {
                ...state,
                province_id: action.value
            }
        case type.CHANGE_SECTOR_ID:
            return {
                ...state,
                sector_id: action.value
            }

        case type.CHANGE_PROVINCE_DATA:
            return {
                ...state,
                provinces_data: action.value
            }

        case type.CHANGE_SECTOR_DATA:
            return {
                ...state,
                sectors_data: action.value
            }
            
        case type.CHANGE_AFTER: 
            return {
                ...state,
                after: action.value,
            }
        case type.TOOGLE_OPEN: 
            return { 
                ...state,
                open: !state.open
            }
        case type.CHANGE_LOADING: 
            return { 
                ...state,
                loading: action.value
            }
        case type.RESET: 
            return { 
                ...defaultState()
            }
        default:
            return state
    }
}
const defaultState = () => ({
    email:"",
    name: "",
    password:"",
    re_password:"",
    pob:"",
    dob:formatDate(Date.now()),
    phone:"",
    role:"",
    province_id:'',
    sector_id:'',

    provinces_data:[],
    sectors_data:[],

    user_role_data:[
        {
          "label": "Guest",
          "value": "guest",
          "role": "guest"
        },
        {
          "label": "Polres",
          "value": "polres",
          "role": "polres"
        },
        {
          "label": "Superadmin",
          "value": "superadmin",
          "role": "superadmin"
        },
    ],
    open: false,
    loading: false,
    after: false,
})

export default main
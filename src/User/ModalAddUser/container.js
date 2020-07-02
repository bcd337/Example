import { connect } from 'react-redux'
import App from './component'
import { 
    change_name, change_email,change_phone, change_password, change_re_password,
    change_pob, change_dob,change_role,
    change_province_id,change_sector_id,
    get_province_data,
    toogle_open, on_save
} from './actions'

const mapStateToProps = (state) => ({
    ...state.modalAddUser,
})

const mapDispatchToProps = {
    change_name,
    change_email,
    change_phone,
    change_password,
    change_re_password,
    change_pob,change_dob, change_role,
    change_province_id,change_sector_id,
    toogle_open,
    on_save,
    get_province_data,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
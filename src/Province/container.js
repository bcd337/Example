import { connect } from 'react-redux'
import App from './component'
import { get_data, on_detail, get_province_type, PROVINCE_TYPE } from './actions'
import { on_modify } from '../ModalModifyProvinsi/actions'

const mapStateToProps = (state) => ({
    ...state.province,
    type: get_province_type(PROVINCE_TYPE, state.province.province_list),
    child: get_province_type(PROVINCE_TYPE, new Array(state.province.province_list.length + 1))
})

const mapDispatchToProps = {
    get_data,
    on_modify,
    on_detail,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
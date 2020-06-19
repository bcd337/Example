import { connect } from 'react-redux'
import App from './component'
import { get_data, on_detail, get_region_type, REGION_TYPE } from './actions'
import { on_modify } from '../ModalModifyProvinsi/actions'

const mapStateToProps = (state) => ({
    ...state.region,
    type: get_region_type(REGION_TYPE, state.region.region_list),
    child: get_region_type(REGION_TYPE, new Array(state.region.region_list.length + 1))
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
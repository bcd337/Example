import { connect } from 'react-redux'
import Commodity from './component'
import {
    get_data,
    // on_delete_modal_togle,
    // on_delete_confirm,
    on_delete
} from './actions'

import {show_detail} from './ModalDetailUser/actions'

const mapStateToProps = (state) => ({
    ...state.user,
})

const mapDispatchToProps = {
    get_data,
    show_detail,
    // on_delete_modal_togle,
    // on_delete_confirm,
    on_delete,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Commodity)
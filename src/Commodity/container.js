import { connect } from 'react-redux'
import Commodity from './component'
import {
    get_data,
    on_delete_modal_togle,
    on_delete_confirm,
    on_delete
} from './actions'

const mapStateToProps = (state) => ({
    ...state.commodity,
})

const mapDispatchToProps = {
    get_data,
    on_delete_modal_togle,
    on_delete_confirm,
    on_delete,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Commodity)
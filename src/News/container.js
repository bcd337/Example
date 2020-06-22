import { connect } from 'react-redux'
import App from './component'
import { get_data, reset, change_filter_approve, change_filter_not_approve, } from './actions'
import { on_open } from '../ModalNewsApprove/actions'

const mapStateToProps = (state) => ({
    ...state.news,
})

const mapDispatchToProps = {
    get_data,
    reset,
    change_filter_approve,
    change_filter_not_approve,
    on_open_approve: on_open,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
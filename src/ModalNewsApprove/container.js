import { connect } from 'react-redux'
import App from './component'
import { toogle_open, on_open, on_approved, on_not_approved } from './actions'

const mapStateToProps = (state) => ({
    ...state.modalNewsApprove,
})

const mapDispatchToProps = {
    toogle_open,
    on_open,
    on_approved,
    on_not_approved,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
import { connect } from 'react-redux'
import App from './component'
import {toogle_open, logout} from './actions'

const mapStateToProps = (state) => ({
    open: state.sidebar.open,
})

const mapDispatchToProps = {
    toogle_open,
    logout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
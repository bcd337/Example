import { connect } from 'react-redux'
import App from './component'
import {toogle_open} from './actions'

const mapStateToProps = (state) => ({
    open: state.sidebar.open,
})

const mapDispatchToProps = {
    toogle_open,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
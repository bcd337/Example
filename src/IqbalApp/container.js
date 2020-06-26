import { connect } from 'react-redux'
import App from './component'
import { get_data } from './actions'

const mapStateToProps = (state) => ({
    ...state.iqbalApp,
})

const mapDispatchToProps = {
    get_data
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
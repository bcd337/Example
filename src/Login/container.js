import { connect } from 'react-redux'
import App from './component'
import { on_login, change_email, change_password } from './actions'

const mapStateToProps = (state) => ({
    ...state.login,
})

const mapDispatchToProps = {
    on_login,
    change_email,
    change_password,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
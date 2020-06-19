import { connect } from 'react-redux'
import App from './component'
import { change_name, toogle_open, on_save, on_modify } from './actions'

const mapStateToProps = (state) => ({
    ...state.modalModifyProvinsi,
})

const mapDispatchToProps = {
    change_name,
    toogle_open,
    on_save,
    on_modify,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
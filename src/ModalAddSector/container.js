import { connect } from 'react-redux'
import App from './component'
import { change_name, toogle_open, on_save, on_open } from './actions'

const mapStateToProps = (state) => ({
    ...state.modalAddSector,
})

const mapDispatchToProps = {
    change_name,
    toogle_open,
    on_save,
    on_open,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
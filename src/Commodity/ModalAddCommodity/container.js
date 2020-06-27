import { connect } from 'react-redux'
import App from './component'
import { change_name, change_commodity_type, toogle_open, on_save } from './actions'

const mapStateToProps = (state) => ({
    ...state.modalAddCommodity,
})

const mapDispatchToProps = {
    change_name,
    change_commodity_type,
    toogle_open,
    on_save,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
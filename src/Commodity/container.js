import { connect } from 'react-redux'
import Commodity from './component'
import { get_data } from './actions'

const mapStateToProps = (state) => ({
    ...state.commodity,
})

const mapDispatchToProps = {
    get_data
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Commodity)
import { connect } from 'react-redux'
import { City } from '../components'

const mapStateToProps = ({ isCityLoading, hasCityErrored, city }) => {
  return {
    isLoading: isCityLoading,
    hasErrored: hasCityErrored,
    city: city,
  }
}

export default connect(mapStateToProps)(City)

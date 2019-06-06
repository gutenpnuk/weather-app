import { connect } from 'react-redux'
import { CitiesList } from '../components'
import {
  addToFavourite,
  fetchCity,
  fetchData,
  itemsFetchDataSuccess,
} from '../actions'

const mapStateToProps = ({ items, isLoading, hasErrored, favouriteItems }) => {
  return {
    items: items,
    isLoading: isLoading,
    hasErrored: hasErrored,
    favouriteItems: favouriteItems,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toFavourite: (id, name) => {
      dispatch(addToFavourite({ woeid: id, title: name }))
    },
    fetchCity: id => {
      dispatch(fetchCity(id))
    },
    fetchData: text => {
      dispatch(fetchData(text))
    },
    nullFetch: () => {
      dispatch(itemsFetchDataSuccess([]))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CitiesList)

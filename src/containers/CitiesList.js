import { connect } from 'react-redux'
import { CitiesList } from '../components'
import { addToFavourite, fetchData, itemsFetchDataSuccess } from '../actions'
import {
  getIsLoading,
  getHasErrored,
  getItemsFromFavourite,
} from '../selectors'

const mapStateToProps = state => {
  return {
    items: getItemsFromFavourite(state),
    isLoading: getIsLoading(state),
    hasErrored: getHasErrored(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toFavourite: (id, name) => {
      dispatch(addToFavourite({ woeid: id, title: name }))
    },
    fetchData: text => {
      text ? dispatch(fetchData(text)) : dispatch(itemsFetchDataSuccess([]))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CitiesList)

import { connect } from 'react-redux'
import { FavouriteList } from '../components'
import { removeFromFavourite, setFilter } from '../actions'
import { getFilteredFavourites } from '../selectors'

const mapStateToProps = state => {
  return {
    items: getFilteredFavourites(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fromFavourite: id => {
      dispatch(removeFromFavourite(id))
    },
    setFilter: text => {
      dispatch(setFilter(text))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavouriteList)

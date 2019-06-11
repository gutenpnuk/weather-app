import { connect } from 'react-redux'
import { FavouriteList } from '../components'
import { removeFromFavourite, setFilter } from '../actions'
import {
  getFilteredFavourites,
  getFavouriteHasErrored,
  getFavouriteIsLoading,
} from '../selectors'
import * as R from 'ramda'

const mapStateToProps = R.applySpec({
  items: getFilteredFavourites,
  isLoading: getFavouriteIsLoading,
  hasErrored: getFavouriteHasErrored,
})

const mapDispatchToProps = {
  removeFromFavourite,
  setFilter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavouriteList)

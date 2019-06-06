import { connect } from 'react-redux'
import { FavouriteList } from '../components'
import { removeFromFavourite, fetchCity, setFilter } from '../actions'

const mapStateToProps = ({ favouriteItems, activeFilter}) => {
  return {
    items: favouriteItems.filter(item => {
      return item.title.toLowerCase().includes(activeFilter)
    }),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fromFavourite: id => {
      dispatch(removeFromFavourite(id))
    },
    fetchCity: id => {
      dispatch(fetchCity(id))
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

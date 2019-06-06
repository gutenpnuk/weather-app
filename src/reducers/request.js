import { handleAction } from 'redux-actions'
import { fetchData } from '../actions'

export const Query = handleAction(
  fetchData,
  (state, { payload }) => {
    return payload
  },
  '',
)

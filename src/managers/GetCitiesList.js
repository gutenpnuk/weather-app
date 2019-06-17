import * as R from 'ramda'

const getCitiesList = R.pipeP(
  query => fetch(`api/location/search/?query=${query}`),
  res => res.json(),
)

export default getCitiesList

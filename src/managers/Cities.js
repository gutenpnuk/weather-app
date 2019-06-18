import * as R from 'ramda'

export const getCitiesList = R.pipeP(
  query => fetch(`api/location/search/?query=${query}`),
  res => res.json(),
)

import { getCity } from './cityItem'

export const getConsolidatedWeather = state =>
  getCity(state).consolidatedWeather || []

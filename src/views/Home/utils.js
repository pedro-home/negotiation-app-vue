import { fetchData } from '@/utils'
import { WEATHER_API } from './constants'

/**
 * Fetch temperature value from London, UK
 */
export const fetchTemperature = async () => {
  const temperature = await fetchData(WEATHER_API)
    .then(({ main: { temp } }) => temp)
    .catch(() => 'Error')

  return temperature
}

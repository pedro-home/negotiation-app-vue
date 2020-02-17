import { fetchData } from '@/utils'
import { WEATHER_API } from './constants'

export const fetchTemperature = async () => {
  const temperature = await fetchData(WEATHER_API)
    .then(({ main: { temp } }) => temp)
    .catch(() => 'Error')

  return temperature
}

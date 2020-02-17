import MockFetch from 'jest-fetch-mock'
import { WEATHER_API } from '@/views/Home/constants'

// Enables fetch as a mock implementation
MockFetch.enableMocks()

// Makes sure all responses from fetch return a 200 OK as default
MockFetch.mockResponse((req) => {
  let data = {}

  if (req.url.startsWith(WEATHER_API)) {
    data = {
      main: { temp: 25 },
    }
  }

  let response = {
    status: 200,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }

  return Promise.resolve(response)
})

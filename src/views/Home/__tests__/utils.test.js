import { fetchTemperature } from '../utils'

describe('Given fetchTemperature()', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  describe('When sends a request', () => {
    describe('And receives successfully data', () => {
      beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify({ main: { temp: 20 } }))
      })
      it('Then should return temperature', (done) => {
        fetchTemperature().then((data) => {
          expect(data).toEqual(20)
          done()
        })
      })
    })

    describe('And receives a network error (CORS)', () => {
      beforeEach(() => {
        fetch.mockRejectOnce(new Error('This is an error'))
      })

      it('Then should return an error string', (done) => {
        fetchTemperature('/test').then((error) => {
          expect(error).toEqual(error)
          done()
        })
      })
    })

    describe('And receives a response error', () => {
      beforeEach(() => {
        fetch.mockResponseOnce('', { status: 404, statusText: 'Not Found' })
      })

      it('Then should return an error string', (done) => {
        fetchTemperature('/test').then((error) => {
          expect(error).toEqual(error)
          done()
        })
      })
    })
  })
})

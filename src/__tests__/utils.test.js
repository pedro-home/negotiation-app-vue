import { fetchData } from '../utils'

describe('Given fetchData()', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  describe('When sends a request', () => {
    describe('And receives successfully data', () => {
      beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify({ data: "I'm watching you" }))
      })
      it('Then should return data', (done) => {
        fetchData('/test').then((data) => {
          expect(data).toEqual({ data: "I'm watching you" })
          done()
        })
      })
    })

    describe('And receives a network error (CORS)', () => {
      beforeEach(() => {
        fetch.mockRejectOnce(new Error('This is an error'))
      })

      it('Then should throw an error', (done) => {
        fetchData('/test').catch((error) => {
          expect(error).toEqual(new Error('This is an error'))
          done()
        })
      })
    })

    describe('And receives a response error', () => {
      beforeEach(() => {
        fetch.mockResponseOnce('', { status: 404, statusText: 'Not Found' })
      })

      it('Then should throw an error', (done) => {
        fetchData('/test').catch((error) => {
          expect(error).toEqual(new Error('Not Found'))
          done()
        })
      })
    })
  })
})

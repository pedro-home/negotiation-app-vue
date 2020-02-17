import { render } from '@/__mocks__/helpers'
import Offer from '../App.vue'

describe('Given <App />', () => {
  let wrapper
  let props = {}
  beforeEach(() => {
    const defaultProps = {}
    wrapper = render(Offer, { ...defaultProps, ...props })
  })

  describe('When initializes', () => {
    describe('And uses default props', () => {
      it('Then should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })
  })
})

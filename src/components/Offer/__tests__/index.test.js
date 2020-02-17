import Vue from 'vue'
import { render } from '@/__mocks__/helpers'
import Offer from '../index.vue'

describe('Given <Offer />', () => {
  let wrapper
  let props = {}
  beforeEach(() => {
    const defaultProps = { onSubmit: () => {}, text: '' }
    wrapper = render(Offer, { ...defaultProps, ...props })
  })

  describe('When initializes', () => {
    describe('And uses default props', () => {
      it('Then should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('And uses onSubmit prop', () => {
      let handleSubmit
      beforeAll(() => {
        handleSubmit = jest.fn()
        props = { onSubmit: handleSubmit }
      })

      it('Then should get a click event', async () => {
        wrapper.setData({ isDisabled: false })
        await Vue.nextTick()

        const button = wrapper.find('button')
        button.trigger('click')
        await Vue.nextTick()

        expect(handleSubmit).toHaveBeenCalledTimes(1)
      })
    })

    describe('And uses text prop', () => {
      beforeAll(() => {
        props = { text: 'Testing' }
      })

      it('Then should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
      })

      it('And should render a placeholder', () => {
        expect(
          wrapper.find('input').element.getAttribute('placeholder')
        ).toEqual('Testing')
      })
    })

    describe('And applies incorrect value into input', () => {
      beforeEach(async () => {
        wrapper.find('input').setValue('Test')
        await Vue.nextTick()
      })
      it('Then should disable submit button', () => {
        expect(wrapper.find('button').element.getAttribute('disabled')).toBe(
          'disabled'
        )
      })
    })

    describe('And applies correct value into input', () => {
      beforeEach(async () => {
        wrapper.find('input').setValue(10)
        await Vue.nextTick()
      })
      it('Then should enable submit button', () => {
        expect(
          wrapper.find('button').element.getAttribute('disabled')
        ).toBeNull()
      })
    })
  })
})

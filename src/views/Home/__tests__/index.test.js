import Vue from 'vue'
import { render } from '@/__mocks__/helpers'
import Home from '../index.vue'

describe('Given <Home />', () => {
  let wrapper
  let props = {}
  beforeEach(() => {
    const defaultProps = {}
    wrapper = render(Home, { ...defaultProps, ...props })
  })

  describe('When initializes', () => {
    describe('And uses default props', () => {
      it('Then should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
      })

      it('And should have the employer offer field', () => {
        expect(wrapper.contains('[data-test="employer"]')).toBe(true)
      })

      it('And should have the employee offer field', () => {
        expect(wrapper.contains('[data-test="employee"]')).toBe(true)
      })
    })

    describe("And interacts with employer's tab", () => {
      let tab
      beforeEach(() => {
        tab = wrapper.find('[data-test="employer"]')
      })

      describe('And submits correct value', () => {
        beforeEach(async () => {
          tab.find('input').setValue(10)
          await Vue.nextTick()

          tab.find('button').trigger('click')
          await Vue.nextTick()
        })

        it('Then should match snapshot', () => {
          expect(wrapper.element).toMatchSnapshot()
        })

        it('And should remove content', () => {
          expect(wrapper.contains('[data-test="employer"]')).toBeFalsy()
        })

        describe("And interacts with employee's tab", () => {
          let tab
          beforeEach(async () => {
            tab = wrapper.find('[data-test="employee"]')
            wrapper.find('.tabs li:not(.is-active) > a').trigger('click')
            Vue.nextTick()
          })

          describe('And submits correct value', () => {
            beforeEach(async () => {
              tab.find('input').setValue(12)
              await Vue.nextTick()

              tab.find('button').trigger('click')
              await Vue.nextTick()
            })

            it('Then should match snapshot', () => {
              expect(wrapper.element).toMatchSnapshot()
            })

            it('And should remove content', () => {
              expect(wrapper.contains('[data-test="employee"]')).toBeFalsy()
            })

            it('And should show a dialog', () => {
              expect(document.body.querySelector('.dialog')).toBeTruthy()
            })
          })
        })
      })
    })
  })
})

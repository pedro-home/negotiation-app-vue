import { mount } from '@vue/test-utils'

/**
 * Cleans DOM tree
 */
export const resetDOM = () => {
  document.head.innerHTML = ''
  document.body.innerHTML = ''
}

/**
 * Renders a new VUE component, cleaning the DOM first
 * @param {Vue.Component} Component
 * @param {Object} props
 */
export const render = (Component, props) => {
  resetDOM()

  return mount(Component, {
    propsData: props,
    attachToDocument: true,
  })
}

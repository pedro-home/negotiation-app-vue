import { mount } from '@vue/test-utils'

export const resetDOM = () => {
  document.head.innerHTML = ''
  document.body.innerHTML = ''
}

export const render = (Component, props) => {
  resetDOM()

  return mount(Component, {
    propsData: props,
    attachToDocument: true,
  })
}

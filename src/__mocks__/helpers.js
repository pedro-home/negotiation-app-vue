import { mount } from '@vue/test-utils'

export const render = (Component, props) => {
  return mount(Component, {
    propsData: props,
    attachToDocument: true,
  })
}

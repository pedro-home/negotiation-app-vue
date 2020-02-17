import Buefy from 'buefy'

export default {
  ...Buefy,
  install: function(Vue, config) {
    Buefy.install(Vue, {
      ...config,
      defaultContainerElement: 'body',
    })
  },
}

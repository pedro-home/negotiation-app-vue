import Vue from 'vue'
import { Dialog, Tabs, Input, Field, Button } from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'

Vue.config.productionTip = false

// Manually add components to reduce bundle size
Vue.use(Dialog)
Vue.use(Tabs)
Vue.use(Field)
Vue.use(Input)
Vue.use(Button)

new Vue({
  render: (h) => h(App),
}).$mount('#app')

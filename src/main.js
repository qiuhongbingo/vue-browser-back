import Vue from 'vue'
import VueBrowserBack from './index'

Vue.use(VueBrowserBack)

/* eslint-disable no-new */
new Vue({
  el: '#app',

  data() {
    return {
      msg: 'init vue-browser-back successful.'
    }
  },

  created() {
    this.$browserBack(() => (this.msg = 'handle vue-browser-back successful.'))
  },

  render(h) {
    return h('p', this.msg)
  }
})

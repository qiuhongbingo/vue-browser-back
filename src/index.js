let isRun = false

function initBrowserBack(handle) {
  window.addEventListener('pageshow', () => {
    isRun = false
    setTimeout(() => (isRun = true), 500)
    listenerBrowserBack(() => handle && handle())
  })
}

function listenerBrowserBack(handle) {
  window.history.pushState({}, '', '#')
  window.addEventListener('popstate', () => isRun && handle())
}

export default Vue => {
  Vue.mixin({
    created() {
      this.$browserBack = initBrowserBack
    }
  })
}

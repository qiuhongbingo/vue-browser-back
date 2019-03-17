// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'vue-browser-back e2e test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('p', 5000)
      .assert.containsText('p', 'init vue-browser-back successful.')
      .pause(500)
      .back()
      .assert.containsText('p', 'handle vue-browser-back successful.')
      .end()
  }
}

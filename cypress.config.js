const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1000,
    viewportHeight: 660,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})

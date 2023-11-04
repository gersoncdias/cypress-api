const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})

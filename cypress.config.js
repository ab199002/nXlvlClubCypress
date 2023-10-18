const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '31badr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    URL: 'https://club.qa.nxlvl.app/login?returnUrl=/michigan.athletics&club=michigan.athletics'
  }
});

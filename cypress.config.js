const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: '31badr',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://club.qa.nxlvl.app/login?returnUrl=/michigan.athletics&club=michigan.athletics',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL: 'https://club.qa.nxlvl.app/login?returnUrl=/michigan.athletics&club=michigan.athletics'
  }
});

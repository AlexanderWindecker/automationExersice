const { defineConfig } = require("cypress");







module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'http://automationexercise.com',
    specPattern: [ 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}' ],
		excludeSpecPattern: [ 'cypress/e2e/**/*.example.cy.js' ],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

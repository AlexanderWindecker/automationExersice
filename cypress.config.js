const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 20000,
  viewportWidth: 1920,
	viewportHeight: 1080,
	downloadsFolder: 'cypress/downloads',
	videosFolder: 'cypress/videos',
	screenshotsFolder: 'cypress/screenshots',
	screenshotOnRunFailure: true,
	scrollBehavior: 'center',

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "cypress.reporter.chrome.json",
  },

  // reporter: "cypress-mochawesome-reporter",
  
  e2e: {
    baseUrl: "http://automationexercise.com",
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    excludeSpecPattern: ["cypress/e2e/**/*.example.cy.js"],
    setupNodeEvents(on, config) {
      // require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});

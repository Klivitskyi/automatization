const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress-test/support/e2e.js',
    specPattern: 'cypress-test/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    admin_url: 'https://ghost-test-e23.digitalpress.blog/ghost/#/signin',
    admin_email: 'd.pareja@uniandes.edu.co',
    admin_password: 'QWER1234..',
    contributor_email: 'd.pareja@uniandes.edu.co',
    contributor_password: 'QWER1234..',
    enable_screenshots: false,
  },
});

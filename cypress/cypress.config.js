const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    admin_url: 'http://localhost:2368/ghost',
    admin_email: '',
    admin_password: '',
  },
});

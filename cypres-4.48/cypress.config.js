const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    admin_url: 'http://ec2-18-191-49-64.us-east-2.compute.amazonaws.com:2368/ghost/#/signin',
    admin_email: 'hd.alvarez@uniandes.edu.co',
    admin_password: 'QWER1234..',
    contributor_email: 'hd.alvarez@uniandes.edu.co',
    contributor_password: 'QWER1234..',
  },
});

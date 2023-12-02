const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    home_url: 'http://ec2-18-117-254-197.us-east-2.compute.amazonaws.com:2368/',
    admin_url: 'http://ec2-18-117-254-197.us-east-2.compute.amazonaws.com:2368/ghost/#/signin',
    admin_email: 'd.pareja@uniandes.edu.co',
    admin_password: 'QWER1234..',
    contributor_email: 'd.pareja@uniandes.edu.co',
    contributor_password: 'QWER1234..',
    enable_screenshots: false,
    mockaroo_post_schema: 'https://my.api.mockaroo.com/post_data.json?key=aed2f580',
    mockaroo_page_schema: 'https://my.api.mockaroo.com/page.json?key=aed2f580',
  },
});

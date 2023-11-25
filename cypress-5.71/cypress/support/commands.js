// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (fileName = false) => { 
  cy.visit(Cypress.env('admin_url'));
  cy.wait(1000);
  const enableLog = Cypress.env('enable_screenshots')
  if(!!enableLog && fileName){ cy.custom_screenshot(fileName); }
  cy.get('input[name="identification"]').type(Cypress.env('admin_email'));
  cy.get('input[name="password"]').type(Cypress.env('admin_password'));
  cy.get('button.login.gh-btn').click();
})

Cypress.Commands.add('custom_screenshot', (id) => { 
  const enableLog = Cypress.env('enable_screenshots')
  if(!!enableLog){ cy.custom_screenshot(id); }
})
import { faker } from '@faker-js/faker';

describe('Newsletter subscription', () => {
  let initScreenshot = false;

  beforeEach(() => {
    // Given
    cy.visit(Cypress.env('home_url'));
    if(!initScreenshot){
      cy.custom_screenshot('12-0');
      initScreenshot = true;
    }
  });

  it('12.1 Successful subscription to the main newsletter', () => {
    // When
    const fullName = faker.person.fullName();
    const email = faker.internet.email();
    cy.get('a[data-portal="signup"]').then((links) =>{
      const linkIndex = Math.floor(Math.random() * links.length);
      cy.wrap(links[linkIndex]).click();
    });
    cy.custom_screenshot('12.1-1');
    cy.get('input#input-name').first().type(fullName);
    cy.get('input#input-email').first().type(email);
    cy.get('button[type="submit"]').first().should('exist').click();
    cy.get('button[type="submit"]').first().find('g.nc-loop-dots-4-24-icon-o').should('exist').should('be.visible');
    cy.custom_screenshot('12.1-2');
    cy.wait(3000);
    // Then
    cy.get('button[type="submit"]').first().find('.checkmark').should('exist').should('be.visible');
    cy.custom_screenshot('12.1-3');
  });
})
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
    const email = faker.internet.email();
    cy.get('form[data-members-form]').then((forms) =>{
      const formIndex = Math.floor(Math.random() * forms.length);
      cy.wrap(forms[formIndex]).find('input').type(email);
      cy.custom_screenshot('12.1-1');
      cy.wrap(forms[formIndex]).find('button').click();
      cy.wrap(forms[formIndex]).find('g.nc-loop-dots-4-24-icon-o').should('exist').should('be.visible');
      cy.custom_screenshot('12.1-2');
      cy.wait(3000);
      // Then
      cy.wrap(forms[formIndex]).find('.checkmark').should('exist').should('be.visible');
      cy.custom_screenshot('12.1-3');
    });
  });
})
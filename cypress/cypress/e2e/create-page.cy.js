import { faker } from '@faker-js/faker';

describe('Create a page', () => {
  // Given
  beforeEach(()=>{
    cy.login();
    cy.get('a[href="#/pages/"]').click();
    cy.get('a[href="#/editor/page/"]').click();
  })
  
  it('5.1 Publicar una página vacía', () => {
    // when
    const postTitle = faker.lorem.sentence();
    cy.get('textarea[placeholder="Page title"]').type(postTitle).clear();

    //then
    cy.get('.gh-publish-trigger').should('not.exist');
  })
 
  it('5.2 Publicar una página y ver la entrada desde la vista de usuario final', () => {
    // when
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea[placeholder="Page title"]').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);

    // Se define la URL
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input#url').type('-page-test');
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);

    // Proceso para confirmar la publiación de la pagina 
    cy.get('.gh-publish-trigger').click();
    cy.wait(1000);
    cy.get('button').contains('Continue').click();
    cy.wait(1000);
    cy.get('.gh-publish-cta button').contains('Publish').click();
    cy.wait(1000);
    cy.get('.gh-post-bookmark-wrapper').invoke('removeAttr', 'target').click();

    //then
    cy.get('h1').should('contain', pageTitle);
    cy.url().should('include', '-page-test');
  })
})
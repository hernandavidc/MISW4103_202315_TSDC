import { faker } from '@faker-js/faker';

// Funcionalidad 7 Eliminar "Pages"
describe('Delete a page', () => {
  let initScreenshot = false;

  // Given
  beforeEach(()=>{
    cy.login(initScreenshot ? false : '7.delete-page');
    cy.wait(2000);
    if(!initScreenshot){
      cy.screenshot('7.1-0');
      initScreenshot = true;
    }
    cy.get('a[href="#/pages/"]').click();
    cy.get('a[href="#/editor/page/"]').click();
  })
  
  // Escenario 7.1
  it('7.1 Eliminar una página', () => {
    cy.screenshot('7.1-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(1);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(pageContent);
    cy.screenshot('7.1-2');
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor').click()
    cy.screenshot('7.1-3');
    cy.get('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth').click();
    cy.screenshot('7.1-4');
    cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
    cy.screenshot('7.1-5');
    Cypress.Promise.onPossiblyUnhandledRejection((error, promise) => {
      throw error
  })
    // The before cy.get is to confirm button delete and generate a console error avoiding the next verification
    // Then
    cy.get('gh-content-entry-title').contains(pageTitle).should('not.exist'); 
  })

  // Escenario 7.2
  it('7.2 Abortar eliminación de una página', () => {
    cy.screenshot('7.2-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(1);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(pageContent);
    cy.screenshot('7.2-2');
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor').click()
    cy.screenshot('7.2-3');
    cy.get('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth').click();
    cy.screenshot('7.2-4');
    cy.get('.modal-footer button.gh-btn').contains('Cancel').click();
    cy.screenshot('7.2-5');
    cy.get('a[href="#/pages/"]').click();
    cy.wait(1000)
    cy.screenshot('7.2-6');
    // Then
    cy.get('a.gh-post-list-title').contains(pageTitle); 
  })
})
import { faker } from '@faker-js/faker';

// Funcionalidad 7 Eliminar "Pages"
describe('Delete a page', () => {
    // Given
    beforeEach(()=>{
      cy.login();
      cy.get('a[href="#/pages/"]').click();
      cy.get('a[href="#/editor/page/"]').click();
    })
   
    // Escenario 7.1
    it('Eliminar una página', () => {
        // When
        const pageTitle = faker.lorem.sentence();
        const pageContent = faker.lorem.paragraphs(1);
        cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
        cy.get('p[data-koenig-dnd-droppable="true"]').type(pageContent);
        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor').click()
        cy.get('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth').click();
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
        // The before cy.get is to confirm button delete and generate a console error avoiding the next verification
        cy.get('gh-content-entry-title').contains(pageTitle).should('not.exist'); 
    })

    // Escenario 7.2
    it('Abortar eliminación de una página', () => {
        // When
        const pageTitle = faker.lorem.sentence();
        const pageContent = faker.lorem.paragraphs(1);
        cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
        cy.get('p[data-koenig-dnd-droppable="true"]').type(pageContent);
        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor').click()
        cy.get('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth').click();
        cy.get('.modal-footer button.gh-btn').contains('Cancel').click();
        cy.get('a[href="#/pages/"]').click();
        cy.wait(1000)
        cy.get('gh-content-entry-title').contains(pageTitle).should('exist'); 
    })
  })
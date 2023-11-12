describe('Create a page', () => {
    // Given
    beforeEach(()=>{
      cy.login();
      cy.get('a[href="#/pages/"]').click();
      cy.get('a[href="#/editor/page/"]').click();
    })
   
    it('Eliminar una página', () => {
        // When
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type('Draft page');
        cy.get('p[data-koenig-dnd-droppable="true"]').type('Draft page description');
        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click()
        cy.get('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth').click();
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
    })
  })
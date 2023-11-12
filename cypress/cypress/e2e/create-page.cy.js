describe('Create a page', () => {
    // Given
    beforeEach(()=>{
      cy.login();
      cy.get('a[href="#/pages/"]').click();
      cy.get('a[href="#/editor/page/"]').click();
    })
   
    it('Publicar una página vacía', () => {
        // When
        cy.get('button.gh-publish-trigger').should('not.exist');
    })
  })
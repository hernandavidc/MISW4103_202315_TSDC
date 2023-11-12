describe('Create a page', () => {
    beforeEach(()=>{
      cy.login();
      cy.get('a[href="#/pages/"]').click();
      cy.get('a[href="#/editor/page/"]').click();
    })
   
    it('Publicar un post vacio', () => {
    })
  })
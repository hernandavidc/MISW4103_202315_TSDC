describe('Create a post', () => {
  beforeEach(()=>{
    cy.login();
    cy.get('a[href="#/posts/"]').click();
    cy.get('a[href="#/editor/post/"]').then((btns) =>{
      const index = Math.floor(Math.random() * btns.length);
      btns[index].click();
    });
  })
 
  it('Publicar un post vacio', () => {
    cy.get('button.gh-publish-trigger').should('not.exist');
  })
})
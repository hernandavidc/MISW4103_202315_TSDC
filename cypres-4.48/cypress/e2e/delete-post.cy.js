import { faker } from '@faker-js/faker';

// Funcionalidad 3 Eliminar Posts
describe('Delete a Post', () => {
  let initScreenshot = false;

  // Given
  beforeEach(()=>{
    cy.login(initScreenshot ? false : '3.delete-post');
    cy.wait(2000);
    if(!initScreenshot){
      cy.screenshot('3.1-0');
      initScreenshot = true;
    }
    cy.get('a[href="#/posts/"]').then((btns) =>{
      const index = Math.floor(Math.random() * btns.length);
      btns[index].click();
    });
    cy.get('a[href="#/editor/post/"]').then((btns) =>{
      const index = Math.floor(Math.random() * btns.length);
      btns[index].click();
    });
  })
  
  // Escenario 3.1
  it('3.1 Eliminar un post', () => {
    cy.screenshot('3.1-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(1);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.koenig-editor__editor.__mobiledoc-editor').type(postContent);
    cy.screenshot('3.1-2');
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor').click()
    cy.screenshot('3.1-3');
    cy.get('button.settings-menu-delete-button').click();
    cy.screenshot('3.1-4');
    cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
    // apparently the confirmation modal doesn't work 
    cy.wait(1000)
    cy.screenshot('3.1-5');
    //Then
    cy.get('a.gh-post-list-title').contains(postTitle).should('not.exist'); 
  })

  // Escenario 3.2
  it('3.2 Abortar eliminación de un post', () => {
    cy.screenshot('3.2-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(1);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.koenig-editor__editor.__mobiledoc-editor').type(postContent);
    cy.screenshot('3.2-2');
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor').click()
    cy.screenshot('3.2-3');
    cy.get('button.settings-menu-delete-button').click();
    cy.screenshot('3.2-4');
    cy.get('.modal-footer button.gh-btn').contains('Cancel').click();
    cy.screenshot('3.2-5');
    cy.get('a[href="#/posts/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)
    cy.screenshot('3.2-6');
    // Then
    cy.get('a.gh-post-list-title').contains(postTitle); 
  })
})
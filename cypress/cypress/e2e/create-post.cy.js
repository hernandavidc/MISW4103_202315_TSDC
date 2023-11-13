import { faker } from '@faker-js/faker';

describe('Create a post', () => {
  beforeEach(()=>{
    // Given
    cy.login();
    cy.get('a[href="#/posts/"]').click();
    cy.get('a[href="#/editor/post/"]').then((btns) =>{
      const index = Math.floor(Math.random() * btns.length);
      btns[index].click();
    });
  })
 
  it('1.1 Publicar un post vacio', () => {
    // when
    const postTitle = faker.lorem.sentence();
    cy.get('textarea[placeholder="Post title"]').type(postTitle).clear();

    //then
    cy.get('.gh-publish-trigger').should('not.exist');
  })
 
  it('1.2 Publicar un post y ver la entrada desde la vista de usuario final', () => {
    // when
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea[placeholder="Post title"]').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);

    // Se define la URL
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input#url').type('-blog-test');
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);

    // Proceso para confirmar la publiación del post
    cy.get('.gh-publish-trigger').click();
    cy.wait(1000);
    cy.get('button').contains('Continue').click();
    cy.wait(1000);
    cy.get('.gh-publish-cta button').contains('Publish').click();
    cy.wait(1000);
    cy.get('.gh-post-bookmark-wrapper').invoke('removeAttr', 'target').click();

    //then
    cy.get('h1').should('contain', postTitle);
    cy.url().should('include', '-blog-test');
  })
})
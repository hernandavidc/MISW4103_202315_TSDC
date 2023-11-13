import { faker } from '@faker-js/faker';

describe('Edit a post', () => {
  const postTitleNewPost = faker.lorem.sentence();
  beforeEach(()=>{
    // Given
    cy.login();
    cy.get('a[href="#/posts/"]').click();
    cy.get('a[href="#/editor/post/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
    });
    const postContent = faker.lorem.paragraphs(1);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitleNewPost);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(postContent);
    cy.get('a[href="#/posts/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
    });
    Cypress.Promise.onPossiblyUnhandledRejection((error, promise) => {
        throw error
    })
    cy.wait(1000)
    cy.get('a[href="#/posts/?type=draft"]').click();
  })

  it('2.1 Editar un post y ver el cambio en la vista de usuario final', () => {
    // When
    const postTitleToEdit = faker.lorem.sentence();
    cy.get('.gh-post-list-title').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').clear().type(postTitleToEdit);
    cy.wait(2000)
    cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    // Then
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', postTitleToEdit);
  })

  it('2.2 Editar un post, dejarlo vacío e intentar guardarlo', () => {
    // When
    cy.get('.gh-post-list-title').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').clear();
    cy.wait(2000)
    cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    // Then
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', "");
  })

  it('2.3 Ingresar a editar un post, modificar algún campo pero no guardar', () => {
    // When
    const postTitleToEdit = faker.lorem.sentence();
    cy.get('.gh-post-list-title').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').clear().type(postTitleToEdit);
    cy.wait(2000)
    cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    // Then, expected to fail because update the title and it shouldn't
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', postTitleNewPost);
  })

})
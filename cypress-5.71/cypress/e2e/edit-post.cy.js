import { faker } from '@faker-js/faker';

describe('Edit a post', () => {
  const postTitleNewPost = faker.lorem.sentence();
  let initScreenshot = false;

  beforeEach(()=>{
    // Given
    cy.login(initScreenshot ? false : '2.edit-post' );
    cy.wait(2000);
    if(!initScreenshot){
      cy.custom_screenshot('2-0');
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
    cy.custom_screenshot('2.1-1');
    // When
    const postTitleToEdit = faker.lorem.sentence();
    cy.get('.gh-post-list-title').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').clear().type(postTitleToEdit);
    cy.wait(2000)
    cy.custom_screenshot('2.1-2');
    cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.custom_screenshot('2.1-3');
    // Then
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', postTitleToEdit);
  })

  it('2.2 Editar un post, dejarlo vacío e intentar guardarlo', () => {
    cy.custom_screenshot('2.2-1');
    // When
    cy.get('.gh-post-list-title').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').clear();
    cy.wait(2000)
    cy.custom_screenshot('2.2-2');
    cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.custom_screenshot('2.2-3');
    // Then
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', "");
  })

  it('2.3 Ingresar a editar un post, modificar algún campo pero no guardar', () => {
    cy.custom_screenshot('2.3-1');
    // When
    const postTitleToEdit = faker.lorem.sentence();
    cy.get('.gh-post-list-title').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').clear().type(postTitleToEdit);
    cy.wait(2000)
    cy.custom_screenshot('2.3-2');
    cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.custom_screenshot('2.3-3');
    // Then, expected to fail because update the title and it shouldn't
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', postTitleNewPost);
  })

})
import { faker } from '@faker-js/faker';

describe('Create a post', () => {
  let initScreenshot = false;

  beforeEach(()=>{
    // Given
    cy.login(initScreenshot ? false : '1.publish-post');
    cy.wait(2000);
    if(!initScreenshot){
      cy.screenshot('1.1-0');
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
 
  it('1.1 Publicar un post vacio', () => {
    cy.screenshot('1.1-1'); // llegar a la pagina
    // when
    const postTitle = faker.lorem.sentence();
    cy.get('textarea[placeholder="Post title"]').type(postTitle).clear();
    cy.screenshot('1.1-2');

    //then
    cy.get('.gh-publish-trigger').should('not.exist');
    cy.screenshot('1.1-3');
  })
 
  it('1.2 Publicar un post y ver la entrada desde la vista de usuario final', () => {
    cy.screenshot('1.2-1'); // llegar a la pagina
    // when
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea[placeholder="Post title"]').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.screenshot('1.2-2');

    // Se define la URL
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.screenshot('1.2-3');
    cy.get('input#url').type('-blog-test');
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.screenshot('1.2-4');

    // Proceso para confirmar la publiación del post
    cy.get('.gh-publish-trigger').click();
    cy.wait(1000);
    cy.screenshot('1.2-5');
    cy.get('button').contains('Continue').click();
    cy.wait(1000);
    cy.screenshot('1.2-6');
    cy.get('.gh-publish-cta button').contains('Publish').click();
    cy.wait(1000);
    cy.screenshot('1.2-7');
    cy.get('.gh-post-bookmark-wrapper').invoke('removeAttr', 'target').click();

    cy.screenshot('1.2-8');
    //then
    cy.get('h1').should('contain', postTitle);
    cy.url().should('include', '-blog-test');
  })
 
  it('1.3 Publicar un post programado y verlo en la lista de filtro', () => {
    cy.screenshot('1.3-1'); // llegar a la pagina
    // when
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea[placeholder="Post title"]').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.screenshot('1.3-2');

    // Se define la URL
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.screenshot('1.3-3');
    cy.get('input#url').type('-blog-test');
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.screenshot('1.3-4');

    // Proceso para confirmar la publiación del post
    cy.get('.gh-publish-trigger').click();
    cy.wait(1000);
    cy.screenshot('1.3-5');
    cy.get('[data-test-setting="publish-at"] button').click();
    cy.wait(1000);
    cy.screenshot('1.3-6');
    cy.get('.gh-radio').contains('Schedule for later').click();
    cy.get('button').contains('Continue').click();
    cy.wait(1000);
    cy.screenshot('1.3-7');
    cy.get('.gh-publish-cta button').contains('Publish').click();
    cy.wait(1000);
    cy.screenshot('1.3-8');
    cy.get('[data-test-button="close-publish-flow"]').click();
    cy.wait(1000);
    cy.screenshot('1.3-9');
    cy.get('a[href="#/posts/"][data-test-breadcrumb]').click();
    cy.wait(1000);
    cy.screenshot('1.3-10');

    //then
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', postTitle);
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-status').should('contain', 'Scheduled');
  })

  it('1.4 Intentar publicar el post pero en el formulario de publicar cancelar', () => {
    cy.screenshot('1.4-1'); // llegar a la pagina
    // when
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea[placeholder="Post title"]').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.screenshot('1.4-2');

    // Proceso para confirmar la publiación del post
    cy.get('.gh-publish-trigger').click();
    cy.wait(1000);
    cy.screenshot('1.4-3');
    cy.get('button').contains('Continue').click();
    cy.wait(1000);
    cy.screenshot('1.4-4');
  
    // Cancelar el proceso de publicación
    cy.get('[data-test-button="close-publish-flow"]').click();
    cy.wait(1000);
    cy.screenshot('1.4-5');
    cy.get('a[href="#/posts/"][data-test-breadcrumb]').click();
    cy.wait(1000);
    cy.screenshot('1.4-6');
    cy.get('a[href="#/posts/?type=draft"]').click();
    cy.wait(1000);
    cy.screenshot('1.4-7');
  
    //then
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', postTitle);
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-status').should('contain', 'Draft');
  })
})
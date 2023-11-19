import { faker } from '@faker-js/faker';

describe('Create a page', () => {
  let initScreenshot = false;

  // Given
  beforeEach(()=>{
    cy.login(initScreenshot ? false : '5.publish-page');
    cy.wait(2000);
    if(!initScreenshot){
      cy.screenshot('5-0');
      initScreenshot = true;
    }
    cy.get('a[href="#/pages/"]').click();
    cy.get('a[href="#/editor/page/"]').click();
  })
  
  it('5.1 Publicar una página vacía', () => {
    cy.screenshot('5.1-1'); // llegar a la pagina
    // when
    const postTitle = faker.lorem.sentence();
    cy.get('textarea[placeholder="Page title"]').type(postTitle).clear();
    cy.screenshot('5.1-2');

    //then
    cy.get('.gh-publish-trigger').should('not.exist');
    cy.screenshot('5.1-3');
  })
 
  it('5.2 Publicar una página y ver la entrada desde la vista de usuario final', () => {
    cy.screenshot('5.2-1'); // llegar a la pagina
    // when
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea[placeholder="Page title"]').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.screenshot('5.2-2');

    // Se define la URL
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input#url').type('-page-test');
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.screenshot('5.2-3');

    // Proceso para confirmar la publiación de la pagina 
    cy.get('.gh-publish-trigger').click();
    cy.wait(1000);
    cy.screenshot('5.2-4');
    cy.get('button').contains('Continue').click();
    cy.wait(1000);
    cy.screenshot('5.2-5');
    cy.get('.gh-publish-cta button').contains('Publish').click();
    cy.wait(1000);
    cy.get('.gh-post-bookmark-wrapper').invoke('removeAttr', 'target').click();

    cy.screenshot('5.2-6');
    //then
    cy.get('h1').should('contain', pageTitle);
    cy.url().should('include', '-page-test');
  })
 
  it('5.3 Publicar una pagina programada y verla en la lista de filtro', () => {
    cy.screenshot('5.3-1'); // llegar a la pagina

    // when
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea[placeholder="Page title"]').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.screenshot('5.3-2');

    // Se define la URL
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.screenshot('5.3-3');
    cy.get('input#url').type('-page-test');
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.screenshot('5.3-4');

    // Proceso para confirmar la publiación de la pagina
    cy.get('.gh-publish-trigger').click();
    cy.wait(1000);
    cy.screenshot('5.3-5');
    cy.get('[data-test-setting="publish-at"] button').click();
    cy.wait(1000);
    cy.screenshot('5.3-6');
    cy.get('.gh-radio').contains('Schedule for later').click();
    cy.get('button').contains('Continue').click();
    cy.wait(1000);
    cy.screenshot('5.3-7');
    cy.get('.gh-publish-cta button').contains('Publish').click();
    cy.wait(1000);
    cy.screenshot('5.3-8');
    cy.get('[data-test-button="close-publish-flow"]').click();
    cy.wait(1000);
    cy.screenshot('5.3-9');
    cy.get('a[href="#/pages/"][data-test-breadcrumb]').click();
    cy.wait(1000);
    cy.screenshot('5.3-10');

    //then
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', pageTitle);
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-status').should('contain', 'Scheduled');
  })

  it('5.4 Intentar publicar una pagina pero en el formulario de publicar cancelar', () => {
    cy.screenshot('5.4-1'); // llegar a la pagina
    // when
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea[placeholder="Page title"]').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.screenshot('5.4-2');

    // Proceso para confirmar la publiación del post
    cy.get('.gh-publish-trigger').click();
    cy.wait(1000);
    cy.screenshot('5.4-3');
    cy.get('button').contains('Continue').click();
    cy.wait(1000);
    cy.screenshot('5.4-4');
  
    // Cancelar el proceso de publicación
    cy.get('[data-test-button="close-publish-flow"]').click();
    cy.wait(1000);
    cy.screenshot('5.4-5');
    cy.get('a[href="#/pages/"][data-test-breadcrumb]').click();
    cy.wait(1000);
    cy.screenshot('5.4-6');
  
    //then
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', pageTitle);
    cy.get('.gh-post-list-title').first().find('.gh-content-entry-status').should('contain', 'Draft');
  })
})
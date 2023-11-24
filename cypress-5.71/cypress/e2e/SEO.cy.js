import { faker } from '@faker-js/faker';

describe('Add Metadata to a Post', () => {
  let initScreenshot = false;

  beforeEach(() => {
    // Given
    cy.login(initScreenshot ? false : '9.add-metadata-to-a-post');
    cy.wait(2000);
    if(!initScreenshot){
      cy.custom_screenshot('9.1-0');
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
  });

  it('9.1 Se requiere crear un post con especificaciones SEO, se publica y desde la vista de usuario final debe tener la meta data', () => {
    cy.custom_screenshot('9.1-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.1-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.1-3'); //Abrir sidebar

    // Then
    cy.get('p').contains('Recommended').should('exist');

    // When
    cy.get('input[name="post-setting-meta-title"]').type(`${postTitle} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${postTitle} meta data`);
    cy.custom_screenshot('9.1-4'); //Llenar datos SEO
  });
});
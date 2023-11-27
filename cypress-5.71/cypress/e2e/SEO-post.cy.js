import { faker } from '@faker-js/faker';

describe('Add Metadata to a Post', () => {
  let initScreenshot = false;
  let dirtyData;

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
    cy.fixture('data-pool-strategy.json').as('dataPool')
    cy.request(Cypress.env('mockaroo_post_schema')).its('body.0').as('body')
    .then((res) => { dirtyData = res; })
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

  it('9.2 Se requiere crear un post con especificaciones SEO de metadata para Google con extensión de titulo mayor al recomendado con mockaroo', () => {
    cy.custom_screenshot('9.2-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.2-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.2-3'); //Abrir sidebar

    // Then
    cy.get('p').contains('Recommended').should('exist');
    
    // When
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.post_title} meta data`);
    cy.custom_screenshot('9.2-4'); //Llenar datos SEO
    // Then
    cy.get('span[style="color: rgb(226, 84, 64); font-weight: bold;"]').should('exist');
  });

  it('9.3 Se requiere crear un post con especificaciones SEO de metadata para Google con extensión de descripción mayor al recomendado con mockaroo', () => {
    cy.custom_screenshot('9.3-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.3-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.3-3'); //Abrir sidebar

    // Then
    cy.get('p').contains('Recommended').should('exist');
    
    // When
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.post_content} meta data`);
    cy.custom_screenshot('9.3-4'); //Llenar datos SEO
    // Then
    cy.get('span[style="color: rgb(226, 84, 64); font-weight: bold;"]').should('exist');
  });

  it('9.4 Se requiere crear un post con especificaciones SEO de metada para Twitter ( X )', () => {
    cy.custom_screenshot('9.4-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.4-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="twitter-data"]').click();
    cy.custom_screenshot('9.4-3'); //Abrir sidebar

    // When
    cy.get('input[name="post-setting-twitter-title"]').type(`${dirtyData.post_title} twitter meta data`);
    cy.get('textarea[name="post-setting-twitter-description"]').type(`${dirtyData.post_content} twitter meta data`);
    cy.custom_screenshot('9.4-4'); //Llenar datos SEO
  });

  it('9.5 Se requiere crear un post con especificaciones SEO de metada para Facebook', () => {
    cy.custom_screenshot('9.5-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.5-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="facebook-data"]').click();
    cy.custom_screenshot('9.5-3'); //Abrir sidebar

    // When
    cy.get('input[name="post-setting-og-title"]').type(`${dirtyData.post_title} Facebook meta data`);
    cy.get('textarea[name="post-setting-og-description"]').type(`${dirtyData.post_content} Facebook meta data`);
    cy.custom_screenshot('9.5-4'); //Llenar datos SEO
  });

  it('9.6 Se requiere crear un post con especificaciones SEO, donde titulo de la meta data de google aplica para twitter', () => {
    cy.custom_screenshot('9.6-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.6-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.6-3'); //Abrir sidebar
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.post_title} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.post_content} meta data`);
    cy.custom_screenshot('9.6-4'); //Llenar datos SEO
    cy.get('button[aria-label="Close meta data panel"]').click(); //Cerrar metadata

    // Then
    cy.get('button[data-test-button="twitter-data"]').click(); //Entrar a twitter
    cy.custom_screenshot('9.6-5'); //Abrir sidebar
    const subStringTitle = dirtyData.post_title.substring(0, 25);
    cy.get('input[name="post-setting-twitter-title"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('9.7 Se requiere crear un post con especificaciones SEO, donde la descripción de la meta data de google aplica para twitter', () => {
    cy.custom_screenshot('9.7-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.7-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.7-3'); //Abrir sidebar
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.post_title} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.post_content} meta data`);
    cy.custom_screenshot('9.7-4'); //Llenar datos SEO
    cy.get('button[aria-label="Close meta data panel"]').click(); //Cerrar metadata

    // Then
    cy.get('button[data-test-button="twitter-data"]').click(); //Entrar a twitter
    cy.custom_screenshot('9.7-5'); //Abrir sidebar
    const subStringTitle = dirtyData.post_content.substring(0, 20);
    cy.get('textarea[name="post-setting-twitter-description"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('9.8 Se requiere crear un post con especificaciones SEO, donde titulo de la meta data de google aplica para facebook', () => {
    cy.custom_screenshot('9.8-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.8-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.8-3'); //Abrir sidebar
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.post_title} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.post_content} meta data`);
    cy.custom_screenshot('9.8-4'); //Llenar datos SEO
    cy.get('button[aria-label="Close meta data panel"]').click(); //Cerrar metadata

    // Then
    cy.get('button[data-test-button="facebook-data"]').click(); //Entrar a Facebook
    cy.custom_screenshot('9.8-5'); //Abrir sidebar
    const subStringTitle = dirtyData.post_title.substring(0, 25);
    cy.get('input[name="post-setting-og-title"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('9.9 Se requiere crear un post con especificaciones SEO, donde la descripción de la meta data de google aplica para Facebook', () => {
    cy.custom_screenshot('9.9-1'); // llegar a la pagina
    // When
    const postTitle = faker.lorem.sentence();
    const postContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.9-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.9-3'); //Abrir sidebar
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.post_title} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.post_content} meta data`);
    cy.custom_screenshot('9.9-4'); //Llenar datos SEO
    cy.get('button[aria-label="Close meta data panel"]').click(); //Cerrar metadata

    // Then
    cy.get('button[data-test-button="facebook-data"]').click(); //Entrar a Facebook
    cy.custom_screenshot('9.9-5'); //Abrir sidebar
    const subStringTitle = dirtyData.post_content.substring(0, 20);
    cy.get('textarea[name="post-setting-og-description"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('9.10 Se requiere crear un post con especificaciones SEO, donde el titulo del post sea utilizado por defecto', () => {
    cy.custom_screenshot('9.10-1'); // llegar a la pagina
    // When
    const postTitle = dirtyData.post_title;
    const postContent = dirtyData.post_content
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.10-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.10-3'); //Abrir sidebar

    // Then
    const subStringTitle = postTitle.substring(0, 20);
    cy.get('input[name="post-setting-meta-title"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('9.11 Se requiere crear un post con especificaciones SEO, donde la descripción del post sea utilizado por defecto', () => {
    cy.custom_screenshot('9.11-1'); // llegar a la pagina
    // When
    const postTitle = dirtyData.post_title;
    const postContent = dirtyData.post_content
    cy.get('textarea.gh-editor-title.ember-text-area').type(postTitle);
    cy.get('.kg-prose > p').type(postContent);
    cy.custom_screenshot('9.11-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('9.11-3'); //Abrir sidebar

    // Then
    const subStringTitle = postContent.substring(0, 20);
    cy.get('textarea[name="post-setting-meta-description"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });
});
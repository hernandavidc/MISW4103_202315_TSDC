import { faker } from '@faker-js/faker';

describe('Add Metadata to a Page', () => {
  let initScreenshot = false;
  let dirtyData;

  beforeEach(() => {
    // Given
    cy.login(initScreenshot ? false : '10.add-metadata-to-a-page');
    cy.wait(2000);
    if(!initScreenshot){
      cy.custom_screenshot('10.1-0');
      initScreenshot = true;
    }
    cy.get('a[href="#/pages/"]').then((btns) =>{
      const index = Math.floor(Math.random() * btns.length);
      btns[index].click();
    });
    cy.get('a[href="#/editor/page/"]').then((btns) =>{
      const index = Math.floor(Math.random() * btns.length);
      btns[index].click();
    });
    cy.fixture('data-pool-strategy.json').as('dataPool')
    cy.request(Cypress.env('mockaroo_page_schema')).its('body.0').as('body')
    .then((res) => { dirtyData = res; })
  });

  it('10.1 Se requiere crear una page con especificaciones SEO, se publica y desde la vista de usuario final debe tener la meta data', () => {
    cy.custom_screenshot('10.1-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.1-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.1-3'); //Abrir sidebar

    // Then
    cy.get('p').contains('Recommended').should('exist');

    // When
    cy.get('input[name="post-setting-meta-title"]').type(`${pageTitle} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${pageTitle} meta data`);
    cy.custom_screenshot('10.1-4'); //Llenar datos SEO
  });

  it('10.2 Se requiere crear una page con especificaciones SEO de metadata para Google con extensión de titulo mayor al recomendado con mockaroo', () => {
    cy.custom_screenshot('10.2-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.2-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.2-3'); //Abrir sidebar

    // Then
    cy.get('p').contains('Recommended').should('exist');
    
    // When
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.page_name} meta data`);
    cy.custom_screenshot('10.2-4'); //Llenar datos SEO
    // Then
    cy.get('span[style="color: rgb(226, 84, 64); font-weight: bold;"]').should('exist');
  });

  it('10.3 Se requiere crear una page con especificaciones SEO de metadata para Google con extensión de descripción mayor al recomendado con mockaroo', () => {
    cy.custom_screenshot('10.3-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.3-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.3-3'); //Abrir sidebar

    // Then
    cy.get('p').contains('Recommended').should('exist');
    
    // When
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.page_content} meta data`);
    cy.custom_screenshot('10.3-4'); //Llenar datos SEO
    // Then
    cy.get('span[style="color: rgb(226, 84, 64); font-weight: bold;"]').should('exist');
  });

  it('10.4 Se requiere crear una page con especificaciones SEO de metada para Twitter ( X )', () => {
    cy.custom_screenshot('10.4-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.4-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="twitter-data"]').click();
    cy.custom_screenshot('10.4-3'); //Abrir sidebar

    // When
    cy.get('input[name="post-setting-twitter-title"]').type(`${dirtyData.page_name} twitter meta data`);
    cy.get('textarea[name="post-setting-twitter-description"]').type(`${dirtyData.page_content} twitter meta data`);
    cy.custom_screenshot('10.4-4'); //Llenar datos SEO
  });

  it('10.5 Se requiere crear una page con especificaciones SEO de metada para Facebook', () => {
    cy.custom_screenshot('10.5-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.5-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="facebook-data"]').click();
    cy.custom_screenshot('10.5-3'); //Abrir sidebar

    // When
    cy.get('input[name="post-setting-og-title"]').type(`${dirtyData.page_name} Facebook meta data`);
    cy.get('textarea[name="post-setting-og-description"]').type(`${dirtyData.page_content} Facebook meta data`);
    cy.custom_screenshot('10.5-4'); //Llenar datos SEO
  });

  it('10.6 Se requiere crear una page con especificaciones SEO, donde titulo de la meta data de google aplica para twitter', () => {
    cy.custom_screenshot('10.6-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.6-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.6-3'); //Abrir sidebar
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.page_name} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.page_content} meta data`);
    cy.custom_screenshot('10.6-4'); //Llenar datos SEO
    cy.get('button[aria-label="Close meta data panel"]').click(); //Cerrar metadata

    // Then
    cy.get('button[data-test-button="twitter-data"]').click(); //Entrar a twitter
    cy.custom_screenshot('10.6-5'); //Abrir sidebar
    const subStringTitle = dirtyData.page_name.substring(0, 25);
    cy.get('input[name="post-setting-twitter-title"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('10.7 Se requiere crear una page con especificaciones SEO, donde la descripción de la meta data de google aplica para twitter', () => {
    cy.custom_screenshot('10.7-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.7-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.7-3'); //Abrir sidebar
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.page_name} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.page_content} meta data`);
    cy.custom_screenshot('10.7-4'); //Llenar datos SEO
    cy.get('button[aria-label="Close meta data panel"]').click(); //Cerrar metadata

    // Then
    cy.get('button[data-test-button="twitter-data"]').click(); //Entrar a twitter
    cy.custom_screenshot('10.7-5'); //Abrir sidebar
    const subStringTitle = dirtyData.page_content.substring(0, 20);
    cy.get('textarea[name="post-setting-twitter-description"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('10.8 Se requiere crear una page con especificaciones SEO, donde titulo de la meta data de google aplica para facebook', () => {
    cy.custom_screenshot('10.8-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.8-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.8-3'); //Abrir sidebar
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.page_name} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.page_content} meta data`);
    cy.custom_screenshot('10.8-4'); //Llenar datos SEO
    cy.get('button[aria-label="Close meta data panel"]').click(); //Cerrar metadata

    // Then
    cy.get('button[data-test-button="facebook-data"]').click(); //Entrar a Facebook
    cy.custom_screenshot('10.8-5'); //Abrir sidebar
    const subStringTitle = dirtyData.page_name.substring(0, 25);
    cy.get('input[name="post-setting-og-title"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('10.9 Se requiere crear una page con especificaciones SEO, donde la descripción de la meta data de google aplica para Facebook', () => {
    cy.custom_screenshot('10.9-1'); // llegar a la pagina
    // When
    const pageTitle = faker.lorem.sentence();
    const pageContent = faker.lorem.paragraphs(2);
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.9-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.9-3'); //Abrir sidebar
    cy.get('input[name="post-setting-meta-title"]').type(`${dirtyData.page_name} meta data`);
    cy.get('textarea[name="post-setting-meta-description"]').type(`${dirtyData.page_content} meta data`);
    cy.custom_screenshot('10.9-4'); //Llenar datos SEO
    cy.get('button[aria-label="Close meta data panel"]').click(); //Cerrar metadata

    // Then
    cy.get('button[data-test-button="facebook-data"]').click(); //Entrar a Facebook
    cy.custom_screenshot('10.9-5'); //Abrir sidebar
    const subStringTitle = dirtyData.page_content.substring(0, 20);
    cy.get('textarea[name="post-setting-og-description"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('10.10 Se requiere crear una page con especificaciones SEO, donde el titulo de la page sea utilizado por defecto', () => {
    cy.custom_screenshot('10.10-1'); // llegar a la pagina
    // When
    const pageTitle = dirtyData.page_name;
    const pageContent = dirtyData.page_content
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.10-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.10-3'); //Abrir sidebar

    // Then
    const subStringTitle = pageTitle.substring(0, 20);
    cy.get('input[name="post-setting-meta-title"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });

  it('10.11 Se requiere crear una page con especificaciones SEO, donde la descripción de la page sea utilizado por defecto', () => {
    cy.custom_screenshot('10.11-1'); // llegar a la pagina
    // When
    const pageTitle = dirtyData.page_name;
    const pageContent = dirtyData.page_content
    cy.get('textarea.gh-editor-title.ember-text-area').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.custom_screenshot('10.11-2'); //llenar datos de formulario

    // Configurar Metadata
    cy.get('button[data-test-psm-trigger]').click();
    cy.get('button[data-test-button="meta-data"]').click();
    cy.custom_screenshot('10.11-3'); //Abrir sidebar

    // Then
    const subStringTitle = pageContent.substring(0, 20);
    cy.get('textarea[name="post-setting-meta-description"]').should('have.attr', 'placeholder').should(placeholder => {
      expect(placeholder).to.include(subStringTitle);
    });
  });
});
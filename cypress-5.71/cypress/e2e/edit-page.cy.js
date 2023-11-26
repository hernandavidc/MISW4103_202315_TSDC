import { faker } from '@faker-js/faker';

describe('Edit a page', () => {
  const pageTitle = faker.lorem.sentence();
  let initScreenshot = false;

  beforeEach(()=>{
    // Given
    cy.login(initScreenshot ? false : '6.edit-page' );
    cy.wait(2000);
    if(!initScreenshot){
      cy.custom_screenshot('6-0');
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
    const pageContent = faker.lorem.paragraphs(1);
    cy.get('textarea[placeholder="Page title"]').type(pageTitle);
    cy.get('.kg-prose > p').type(pageContent);
    cy.get('a[href="#/pages/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
    });
    Cypress.Promise.onPossiblyUnhandledRejection((error, promise) => {
        throw error
    })
    cy.wait(1000)
    cy.get('a[href="#/pages/"]').then((btns) =>{
      const index = Math.floor(Math.random() * btns.length);
      btns[index].click();
    });
    cy.fixture('data-pool-strategy.json').as('dataPool');
  })

  it('6.1 Editar un pages y ver el cambio en la vista de usuario final', () => {
    cy.custom_screenshot('6.1-1');
    // When
    const pagesTitleToEdit = faker.lorem.sentence();
    cy.get('.gh-posts-list-item a').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Page title"]').clear().type(pagesTitleToEdit);
    cy.wait(2000)
    cy.custom_screenshot('6.1-2');
    cy.get('a[href="#/pages/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.custom_screenshot('6.1-3');
    // Then
    cy.get('.gh-content-entry-title').first().should('contain', pagesTitleToEdit);
  })

  it('6.2 Editar un pagina, dejarlo vacío e intentar guardarlo', () => {
    cy.custom_screenshot('6.2-1');
    // When
    cy.get('.gh-post-list-title a').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Page title"]').clear();
    cy.wait(2000)
    cy.custom_screenshot('6.2-2');
    cy.get('a[href="#/pages/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.custom_screenshot('6.2-3');
    // Then
    cy.get('.gh-content-entry-title').first().should('contain', "(Untitled)");
  })

  it('6.3 Ingresar a editar un pagina, modificar algún campo pero no guardar', () => {
    cy.custom_screenshot('6.3-1');
    // When
    const postTitleToEdit = faker.lorem.sentence();
    cy.get('.gh-post-list-title a').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Page title"]').clear().type(postTitleToEdit);
    cy.wait(2000)
    cy.custom_screenshot('6.3-2');
    cy.get('a[href="#/pages/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.custom_screenshot('6.3-3');
    // Then, expected to fail because update the title and it shouldn't
    cy.get('.gh-content-entry-title').first().should('contain', pageTitle);
  })

  it('6.4 Ingresar a editar una página, modificar el campo publish date con una fecha inválida', function() {
    // When 
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input[placeholder="YYYY-MM-DD"]').type(this.dataPool.publishDate.invalidDate.invalidDateString);
    cy.get('input#url').click();
    cy.wait(2000);
    // Then
    cy.get('.gh-date-time-picker-error').should('contain', this.dataPool.publishDate.invalidDate.expectedMessage);
  })

  it('6.5 Ingresar a editar una página, modificar el campo publish date con una fecha con formato inválido', function() {
    // When 
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input[placeholder="YYYY-MM-DD"]').type(this.dataPool.publishDate.invalidDateFormat.invalidDateString);
    cy.get('input#url').click();
    cy.wait(2000);
    // Then
    cy.get('.gh-date-time-picker-error').should('contain', this.dataPool.publishDate.invalidDateFormat.expectedMessage);
  })

  it('6.6 Ingresar a editar una página, modificar el campo publish date para ponerlo vacío', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input[placeholder="YYYY-MM-DD"]').clear();
    cy.get('input#url').click();
    cy.wait(2000);
    var today = new Date();
    var now_utc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(),
                today.getUTCDate(), today.getUTCHours(),
                today.getUTCMinutes(), today.getUTCSeconds());
    today = new Date(now_utc);
    var dd = String(today.getUTCDate()).padStart(2, '0');
    var mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getUTCFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    // Then
    cy.get('input[data-test-date-time-picker-date-input]').should('have.value', today);
  })

  it('6.7 Ingresar a editar una página, modificar el campo de hora con formato inválido', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input[data-test-date-time-picker-time-input]').type(this.dataPool.publishDateHour.invalidDateHourFormat.invalidHourFormat);
    cy.get('input#url').click();
    cy.wait(2000);
    // Then
    cy.get('div[data-test-date-time-picker-error]').should('contain', this.dataPool.publishDateHour.invalidDateHourFormat.expectedMessage);
    let matchHour = `${this.dataPool.publishDateHour.invalidDateHourFormat.expectedInputContent}`;
    const patternMatch = new RegExp(matchHour, 'g');
    cy.get('input[data-test-date-time-picker-time-input]').should('have.prop', 'value').should('match', patternMatch);
  })

  it('6.8 Ingresar a editar una página, modificar el campo de hora dejándolo vacío', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input[data-test-date-time-picker-time-input]').clear();
    cy.get('input#url').click();
    cy.wait(2000);
    // Then
    cy.get('div[data-test-date-time-picker-error]').should('contain', this.dataPool.publishDateHour.invalidDateHourEmpty.expectedMessage);
    cy.get('input[data-test-date-time-picker-time-input]').should('have.value', this.dataPool.publishDateHour.invalidDateHourEmpty.expectedInputContent);
  })

  it('6.9 Ingresar a editar una página, modificar el campo de hora con un formato válido', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input[data-test-date-time-picker-time-input]').clear();
    cy.get('input[data-test-date-time-picker-time-input]').type(this.dataPool.publishDateHour.validDateHourFormat.validHourFormat, { force: true });
    cy.get('input#url').click();
    cy.wait(2000);
    // Then
    cy.get('div[data-test-date-time-picker-error]').should('not.have.text');
    cy.get('input[data-test-date-time-picker-time-input]').should('have.value', this.dataPool.publishDateHour.validDateHourFormat.expectedInputContent);
  })

  it('6.10 Ingresar a editar una página, modificar el campo excerpt con un longitud superior a 300', function() {
    // When
    cy.get('.gh-posts-list-item a').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('textarea[name="post-setting-custom-excerpt"]').type(this.dataPool.excerptField.invalid.invalidInputText);
    cy.get('label[for="custom-excerpt"]').click();
    cy.wait(2000);
    // Then
    cy.get('[data-test-error="custom-excerpt"]').contains(this.dataPool.excerptField.invalid.expectedMessage);
  })

  it('6.11 Ingresar a editar una página, modificar el campo excerpt con un longitud inferior a 300 caracteres', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('textarea[name="post-setting-custom-excerpt"]').type(this.dataPool.excerptField.valid.validInputText);
    cy.get('label[for="custom-excerpt"]').click();
    cy.wait(2000);
    // Then
    cy.get('[data-test-error="custom-excerpt"]').should('not.have.text');
  })

})
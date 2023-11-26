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
    cy.fixture('data-pool-strategy.json').as('dataPool');
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

  // it('2.2 Editar un post, dejarlo vacío e intentar guardarlo', () => {
  //   cy.custom_screenshot('2.2-1');
  //   // When
  //   cy.get('.gh-post-list-title').first().click()
  //   cy.wait(1000)
  //   cy.get('textarea[placeholder="Post title"]').clear();
  //   cy.wait(2000)
  //   cy.custom_screenshot('2.2-2');
  //   cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
  //       const index = Math.floor(Math.random() * btns.length);
  //       btns[index].click();
  //     });
  //   cy.wait(1000)

  //   cy.custom_screenshot('2.2-3');
  //   // Then
  //   cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', "");
  // })

  it('2.3 Ingresar a editar un post, modificar algún campo pero no guardar (campo título)', () => {
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

  it('2.4 Ingresar a editar un post, modificar el campo post URL con un formato inválido y validar que corrija el formato', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input#url').type(this.dataPool.postURLInvalid.invalidFormat);
    cy.get('.gh-date-time-picker-date').click();
    cy.wait(2000);
    // Then, should contain the valid format
    cy.get('.ghost-url-preview.description.ember-view').should('contain', this.dataPool.postURLInvalid.expectedValidFormat);
  })

  it('2.5 Ingresar a editar un post, modificar el campo post URL con un formato válido y validar que se mantenga el formato', function() {
    // When 
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input#url').type(this.dataPool.postURLValid.validFormat);
    cy.get('.gh-date-time-picker-date').click();
    cy.wait(2000);
    // Then, should contain the valid format
    cy.get('.ghost-url-preview.description.ember-view').should('contain', this.dataPool.postURLValid.expectedValidFormat);
  })

  it('2.6 Ingresar a editar un post, modificar el campo publish date con una fecha inválida', function() {
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

  it('2.7 Ingresar a editar un post, modificar el campo publish date con una fecha con formato inválido', function() {
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

  it('2.8 Ingresar a editar un post, modificar el campo publish date para ponerlo vacío', function() {
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

  it('2.9 Ingresar a editar un post, modificar el campo de hora con formato inválido', function() {
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

  it('2.10 Ingresar a editar un post, modificar el campo de hora dejándolo vacío', function() {
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

  it('2.11 Ingresar a editar un post, modificar el campo de hora con un formato válido', function() {
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

  it('2.12 Ingresar a editar un post, modificar el campo excerpt con un longitud superior a 300', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('textarea[name="post-setting-custom-excerpt"]').type(this.dataPool.excerptField.invalid.invalidInputText);
    cy.get('label[for="custom-excerpt"]').click();
    cy.wait(2000);
    // Then
    cy.get('[data-test-error="custom-excerpt"]').contains(this.dataPool.excerptField.invalid.expectedMessage);
  })

  it('2.13 Ingresar a editar un post, modificar el campo excerpt con un longitud inferior a 300 caracteres', function() {
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

  it('2.14 Ingresar a editar un post, modificar el campo tag con una longitud superior a 190 caracteres', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input.ember-power-select-trigger-multiple-input').first().type(this.dataPool.tagField.invalid.invalidInputText);
    cy.get('li.ember-power-select-option').click();
    cy.wait(500);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(500);
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click(); // btn publicar
    cy.wait(1000);
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click(); // confirmación
    cy.wait(1000);
    cy.get('button[data-test-button="confirm-publish"]').click(); // publicar ahora
    cy.wait(2000);
    // Then
    cy.get('p.error.gh-box.gh-box-error').should('contain', this.dataPool.tagField.invalid.expectedMessage);
  })

  it('2.15 Ingresar a editar un post, modificar el campo tag con una longitud inferior a 190 caracteres', function() {
    // When
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('input.ember-power-select-trigger-multiple-input').first().type(this.dataPool.tagField.valid.validInputText);
    cy.get('li[data-option-index="0"]').click();
    cy.wait(500);
    cy.get('button.settings-menu-toggle').click();
    cy.wait(500);
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click(); // btn publicar
    cy.wait(1000);
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click(); // confirmación
    cy.wait(1000);
    cy.get('button[data-test-button="confirm-publish"]').click(); // publicar ahora
    cy.wait(2000);
    // Then
    cy.get('p.error.gh-box.gh-box-error').should('not.exist');
  })
})
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

  // it('2.1 Editar un post y ver el cambio en la vista de usuario final', () => {
  //   cy.custom_screenshot('2.1-1');
  //   // When
  //   const postTitleToEdit = faker.lorem.sentence();
  //   cy.get('.gh-post-list-title').first().click()
  //   cy.wait(1000)
  //   cy.get('textarea[placeholder="Post title"]').clear().type(postTitleToEdit);
  //   cy.wait(2000)
  //   cy.custom_screenshot('2.1-2');
  //   cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
  //       const index = Math.floor(Math.random() * btns.length);
  //       btns[index].click();
  //     });
  //   cy.wait(1000)

  //   cy.custom_screenshot('2.1-3');
  //   // Then
  //   cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', postTitleToEdit);
  // })

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

  // it('2.3 Ingresar a editar un post, modificar algún campo pero no guardar (campo título)', () => {
  //   cy.custom_screenshot('2.3-1');
  //   // When
  //   const postTitleToEdit = faker.lorem.sentence();
  //   cy.get('.gh-post-list-title').first().click()
  //   cy.wait(1000)
  //   cy.get('textarea[placeholder="Post title"]').clear().type(postTitleToEdit);
  //   cy.wait(2000)
  //   cy.custom_screenshot('2.3-2');
  //   cy.get('a[href="#/posts/?type=draft"]').then((btns) =>{
  //       const index = Math.floor(Math.random() * btns.length);
  //       btns[index].click();
  //     });
  //   cy.wait(1000)

  //   cy.custom_screenshot('2.3-3');
  //   // Then, expected to fail because update the title and it shouldn't
  //   cy.get('.gh-post-list-title').first().find('.gh-content-entry-title').should('contain', postTitleNewPost);
  // })

  // it('2.4 Ingresar a editar un post, modificar el campo post URL con un formato inválido y validar que corrija el formato', function() {
  //   // When
  //   cy.get('.gh-post-list-title').first().click();
  //   cy.wait(1000);
  //   cy.get('button.settings-menu-toggle').click();
  //   cy.wait(1000);
  //   cy.get('input#url').type(this.dataPool.postURLInvalid.invalidFormat);
  //   cy.get('.gh-date-time-picker-date').click();
  //   cy.wait(2000);
  //   // Then, should contain the valid format
  //   cy.get('.ghost-url-preview.description.ember-view').should('contain', this.dataPool.postURLInvalid.expectedValidFormat);
  // })

  // it('2.5 Ingresar a editar un post, modificar el campo post URL con un formato válido y validar que se mantenga el formato', function() {
  //   // When 
  //   cy.get('.gh-post-list-title').first().click();
  //   cy.wait(1000);
  //   cy.get('button.settings-menu-toggle').click();
  //   cy.wait(1000);
  //   cy.get('input#url').type(this.dataPool.postURLValid.validFormat);
  //   cy.get('.gh-date-time-picker-date').click();
  //   cy.wait(2000);
  //   // Then, should contain the valid format
  //   cy.get('.ghost-url-preview.description.ember-view').should('contain', this.dataPool.postURLValid.expectedValidFormat);
  // })

  // it('2.6 Ingresar a editar un post, modificar el campo publish date con una fecha inválida', function() {
  //   // When 
  //   cy.get('.gh-post-list-title').first().click();
  //   cy.wait(1000);
  //   cy.get('button.settings-menu-toggle').click();
  //   cy.wait(1000);
  //   cy.get('input[placeholder="YYYY-MM-DD"]').type(this.dataPool.publishDate.invalidDate.invalidDateString);
  //   cy.get('input#url').click();
  //   cy.wait(2000);
  //   // Then
  //   cy.get('.gh-date-time-picker-error').should('contain', this.dataPool.publishDate.invalidDate.expectedMessage);
  // })

  // it('2.7 Ingresar a editar un post, modificar el campo publish date con una fecha con formato inválido', function() {
  //   // When 
  //   cy.get('.gh-post-list-title').first().click();
  //   cy.wait(1000);
  //   cy.get('button.settings-menu-toggle').click();
  //   cy.wait(1000);
  //   cy.get('input[placeholder="YYYY-MM-DD"]').type(this.dataPool.publishDate.invalidDateFormat.invalidDateString);
  //   cy.get('input#url').click();
  //   cy.wait(2000);
  //   // Then
  //   cy.get('.gh-date-time-picker-error').should('contain', this.dataPool.publishDate.invalidDateFormat.expectedMessage);
  // })

  // it('2.8 Ingresar a editar un post, modificar el campo publish date para ponerlo vacío', function() {
  //   // When
  //   cy.get('.gh-post-list-title').first().click();
  //   cy.wait(1000);
  //   cy.get('button.settings-menu-toggle').click();
  //   cy.wait(1000);
  //   cy.get('input[placeholder="YYYY-MM-DD"]').clear();
  //   cy.get('input#url').click();
  //   cy.wait(2000);
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, '0');
  //   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //   var yyyy = today.getFullYear();

  //   today = yyyy + '-' + mm + '-' + dd;
  //   // Then
  //   cy.get('input[data-test-date-time-picker-date-input]').should('have.value', today);
  // })

  // it('2.9 Ingresar a editar un post, modificar el campo de hora con formato inválido', function() {
  //   // When
  //   cy.get('.gh-post-list-title').first().click();
  //   cy.wait(1000);
  //   cy.get('button.settings-menu-toggle').click();
  //   cy.wait(1000);
  //   cy.get('input[data-test-date-time-picker-time-input]').type(this.dataPool.publishDateHour.invalidDateHourFormat.invalidHourFormat);
  //   cy.get('input#url').click();
  //   cy.wait(2000);
  //   // Then
  //   cy.get('div[data-test-date-time-picker-error]').should('contain', this.dataPool.publishDateHour.invalidDateHourFormat.expectedMessage);
  //   let matchHour = `${this.dataPool.publishDateHour.invalidDateHourFormat.expectedInputContent}`;
  //   const patternMatch = new RegExp(matchHour, 'g');
  //   cy.get('input[data-test-date-time-picker-time-input]').should('have.prop', 'value').should('match', patternMatch);
  // })

  // it('2.10 Ingresar a editar un post, modificar el campo de hora dejándolo vacío', function() {
  //   // When
  //   cy.get('.gh-post-list-title').first().click();
  //   cy.wait(1000);
  //   cy.get('button.settings-menu-toggle').click();
  //   cy.wait(1000);
  //   cy.get('input[data-test-date-time-picker-time-input]').clear();
  //   cy.get('input#url').click();
  //   cy.wait(2000);
  //   // Then
  //   cy.get('div[data-test-date-time-picker-error]').should('contain', this.dataPool.publishDateHour.invalidDateHourEmpty.expectedMessage);
  //   cy.get('input[data-test-date-time-picker-time-input]').should('have.value', this.dataPool.publishDateHour.invalidDateHourEmpty.expectedInputContent);
  // })

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
    cy.get('div[data-test-date-time-picker-error]').should('not.exist');
    cy.get('input[data-test-date-time-picker-time-input]').should('have.value', this.dataPool.publishDateHour.validDateHourFormat.expectedInputContent);
  })

})
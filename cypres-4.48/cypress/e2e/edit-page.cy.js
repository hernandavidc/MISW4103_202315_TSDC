import { faker } from '@faker-js/faker';

describe('Edit a page', () => {
  const pageTitle = faker.lorem.sentence();
  let initScreenshot = false;

  beforeEach(()=>{
    // Given
    cy.login(initScreenshot ? false : '6.edit-page' );
    cy.wait(2000);
    if(!initScreenshot){
      cy.screenshot('6-0');
      initScreenshot = true;
    }
    cy.get('a[href="#/pages/"]').then((btns) =>{
      const index = Math.floor(Math.random() * btns.length);
      btns[index].click();
    });
    cy.get('a[href="#/editor/pages/"]').then((btns) =>{
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
    cy.get('a[href="#/pages/"]').click();
  })

  it('2.1 Editar un pages y ver el cambio en la vista de usuario final', () => {
    cy.screenshot('6.1-1');
    // When
    const pagesTitleToEdit = faker.lorem.sentence();
    cy.get('.gh-posts-list-item a').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Page title"]').clear().type(pagesTitleToEdit);
    cy.wait(2000)
    cy.screenshot('6.1-2');
    cy.get('a[href="#/pages/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.screenshot('6.1-3');
    // Then
    cy.get('.gh-content-entry-title').first().should('contain', pagesTitleToEdit);
  })

  it('6.2 Editar un pagina, dejarlo vacío e intentar guardarlo', () => {
    cy.screenshot('6.2-1');
    // When
    cy.get('.gh-post-list-title a').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Page title"]').clear();
    cy.wait(2000)
    cy.screenshot('6.2-2');
    cy.get('a[href="#/pages/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.screenshot('6.2-3');
    // Then
    cy.get('.gh-content-entry-title').first().should('contain', "(Untitled)");
  })

  it('6.3 Ingresar a editar un pagina, modificar algún campo pero no guardar', () => {
    cy.screenshot('6.3-1');
    // When
    const postTitleToEdit = faker.lorem.sentence();
    cy.get('.gh-post-list-title a').first().click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Page title"]').clear().type(postTitleToEdit);
    cy.wait(2000)
    cy.screenshot('6.3-2');
    cy.get('a[href="#/pages/"]').then((btns) =>{
        const index = Math.floor(Math.random() * btns.length);
        btns[index].click();
      });
    cy.wait(1000)

    cy.screenshot('6.3-3');
    // Then, expected to fail because update the title and it shouldn't
    cy.get('.gh-content-entry-title').first().should('contain', pageTitle);
  })

})
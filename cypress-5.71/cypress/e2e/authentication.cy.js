describe('Login scenarios test', () => {
  let initScreenshot = false;

  beforeEach(function() {
    // Given
    cy.visit(Cypress.env('admin_url'));
    cy.wait(1000);
    cy.fixture('data-pool-strategy.json').as('dataPool')
  });

  it('0.1 Login con user incorrecto', function() {
    cy.get('input[name="identification"]').type(this.dataPool.invalidUser.email);
    cy.get('input[name="password"]').type(this.dataPool.invalidUser.password);
    cy.get('button.login.gh-btn').click();
    cy.wait(1000);
    cy.get('span[data-test-task-button-state="failure"]').should('exist');
    cy.get('p.main-error').contains("There is no user with that email address.");
  });

  it('0.2 Login con campos vacíos', function(){
    cy.get('button.login.gh-btn').click();
    cy.wait(1000);
    cy.get('span[data-test-task-button-state="failure"]').should('exist');
    cy.get('p.main-error').contains("Please fill out the form to sign in.");
    cy.get('.form-group').each((field) =>{
      cy.wrap(field).should("have.class", "error");
    });
  });

  // Incidencia espacio en el final del mensaje Your password is incorrect.
  it('0.3 Login con contraseña incorrecta', function() {
      cy.get('input[name="identification"]').type(Cypress.env('admin_email'));
      cy.get('input[name="password"]').type(this.dataPool.invalidUser.password);
      cy.get('button.login.gh-btn').click();
      cy.wait(1000);
      cy.get('span[data-test-task-button-state="failure"]').should('exist');
      cy.get('p.main-error').contains("Your password is incorrect.");
      cy.get('.form-group.error').should("exist");
  });

  it('0.4 Login exitoso', function() {
    cy.get('input[name="identification"]').type(Cypress.env('admin_email'));
    cy.get('input[name="password"]').type(Cypress.env('admin_password'));
    cy.get('button.login.gh-btn').click();
    cy.wait(1000);
    cy.url().should('include','/dashboard');
  });
});
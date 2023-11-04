const user = Cypress.env('user_name')
const password = Cypress.env('user_password')


describe('Login', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  });
  

  it('Login sucesso', () => {
    cy.login(user, password);
  })
})
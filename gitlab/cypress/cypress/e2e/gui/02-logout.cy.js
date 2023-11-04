const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('Logout', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    cy.login(user, password);
  });
  
    it('successfully', () => {
      cy.logout()
    })
  })
  
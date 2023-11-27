const loginPage = require('../page_elements/login_page')
const loginPg = new loginPage()
const logoutPage = require('../page_elements/logout_page')
const logoutPg = new logoutPage()

Cypress.Commands.add('login', (user, password) => {

  const login = () => {

    cy.get(loginPg.campo_login)
      .should('exist')
      .should('be.visible')
      .type(user)

    cy.get(loginPg.campo_senha)
      .should('exist')
      .should('be.visible')
      .type(password, {log: false})

    cy.get(loginPg.btn_login)
      .should('exist')
      .should('be.visible')
      .click()

    cy.get(loginPg.avatar)  
      .should('exist')
      .should('be.visible')
  }

  login()

})

Cypress.Commands.add('logout', () => {

  cy.get(loginPg.avatar)  
  .should('exist')
  .should('be.visible')
  .click()

  cy.get(logoutPg.btn_logout)
    .should('exist')
    .should('be.visible')
    .click()
  cy.url().should('include', '/users/sign_in'); 
})

Cypress.Commands.add('lerCookieDoArquivo', () => {
  const caminhoAbsoluto = Cypress.config("fileServerFolder") + '/temporario.txt';

  return cy.readFile(caminhoAbsoluto).then((conteudoDoArquivo) => {
    return conteudoDoArquivo;
  });
});
const issuePage = require('../page_elements/issue_page')
const issuePg = new issuePage()


Cypress.Commands.add('gui_createIssue', issue => {
  cy.visit(`${Cypress.env('url')}/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
  cy.get(issuePg.title_issue).type(issue.title)
  cy.get(issuePg.desc_issue).type(issue.description)
  cy.contains(issuePg.btn_issue).click()
})
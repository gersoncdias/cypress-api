const projectPage = require('../page_elements/project_page')
const projectPg = new projectPage()


Cypress.Commands.add('gui_createProject', project => {
  cy.visit(`${Cypress.env('url')}/projects/new`)
  cy.get(projectPg.name_project).type(project.name)
  cy.get(projectPg.desc_project).type(project.description)
  cy.get(projectPg.check_readme).check()
  cy.get(projectPg.btn_project).click()
})
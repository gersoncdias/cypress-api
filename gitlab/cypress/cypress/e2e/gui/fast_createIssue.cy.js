import { faker } from '@faker-js/faker'
const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`
const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
const issue = {
  title: `issue-${faker.company.buzzNoun()}`,
  description: faker.lorem.words(3),
  project: {
      name: `project-${faker.company.buzzNoun()}`,
      description: faker.lorem.words(3),
  }
}

describe('Criar Issue', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    cy.login(user, password);
    cy.api_createProject(issue.project, accessToken)
  })

  it('Criar Issue sucesso', () => {
    cy.gui_createIssue(issue)
  })
})

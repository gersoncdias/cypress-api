import { faker } from '@faker-js/faker'
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

describe('Create Issue', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    cy.login(user, password);
    cy.api_createProject(issue.project)
  })

  it('successfully', () => {
    cy.gui_createIssue(issue)
  })
})

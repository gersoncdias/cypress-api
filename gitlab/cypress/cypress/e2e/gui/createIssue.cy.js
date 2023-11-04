import { faker } from '@faker-js/faker'
const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
const issue = {
  title: `issue-${faker.datatype.uuid()}`,
  description: faker.random.words(3),
  project: {
      name: `project-${faker.company.bsNoun()}`,
      description: faker.random.words(5)
  }
}

describe('Create Issue', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    cy.login(user, password);
    cy.gui_createProject(issue.project)
  })

  it('successfully', () => {
    cy.gui_createIssue(issue)
  })
})

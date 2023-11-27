import { faker } from '@faker-js/faker'
const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

describe('Criar Projeto', () => {
 beforeEach(() => cy.api_deleteProjects())

  it('Criar projeto com sucesso', () => {
    const project = {
        name: `project-${faker.company.bsNoun()}`,
        description: faker.random.words(5)
      };

    cy.api_createProject(project, accessToken)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
      })
  })

  it('Criar projeto não autorizado', () => {
    const project = {
        name: `project-${faker.company.bsNoun()}`,
        description: faker.random.words(5)
      };

    cy.api_createProject(project,)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body.message).to.equal("401 Unauthorized")
      })
  })
})
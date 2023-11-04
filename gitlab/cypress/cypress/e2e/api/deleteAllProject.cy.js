import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    const project = {
      name: `project-${faker.company.bsNoun()}`,
      description: faker.random.words(5)
    };

  cy.api_createProject(project)
    .then(response => {
      expect(response.status).to.equal(201)
      expect(response.body.name).to.equal(project.name)
    })
  });

  it('successfully', () => {
    cy.api_deleteProjects()
      .then(response => {
        expect(response.status).to.equal(202);
        expect(response.body.message).to.equal('202 Accepted');
      })
  })
})

afterEach(() => {
  cy.api_getAllProjects()
      .then(response => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.empty
      });      
});

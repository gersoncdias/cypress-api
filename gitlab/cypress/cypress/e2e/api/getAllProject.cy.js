import { faker } from '@faker-js/faker'

describe('Get All Project', () => {
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
    cy.api_getAllProjects()
      .then(response => {
        expect(response.status).to.equal(200);

        const names = Cypress._.chain(response.body).map('name').value();
        expect(names).to.satisfy(names => {
          return names.some(name => {
            return name.length >= 5;
          });
        });
      });
  });
})

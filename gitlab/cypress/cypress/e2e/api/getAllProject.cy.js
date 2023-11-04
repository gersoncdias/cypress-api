import { faker } from '@faker-js/faker'
const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

describe('Buscar Projetos', () => {
  beforeEach(() => {
    const project = {
      name: `project-${faker.company.bsNoun()}`,
      description: faker.random.words(5)
    };

  cy.api_createProject(project, accessToken)
    .then(response => {
      expect(response.status).to.equal(201)
      expect(response.body.name).to.equal(project.name)
    })
  });
  it('Buscar projeto sucesso', () => {
    cy.api_getAllProjects(accessToken)
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
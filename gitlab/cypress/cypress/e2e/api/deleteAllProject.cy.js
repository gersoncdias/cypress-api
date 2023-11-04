import { faker } from '@faker-js/faker';
const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`;
let projectId;

describe('Deletar Projetos', () => {

  it('Deletar projeto com sucesso', () => {
    const project = {
      name: `project-${faker.company.bsNoun()}`,
      description: faker.random.words(5),
    };

    cy.api_createProject(project, accessToken).then((response) => {
      expect(response.status).to.equal(201);
      projectId = response.body.id;

      cy.api_deleteProjects(accessToken, projectId).then((deleteResponse) => {
        expect(deleteResponse.status).to.equal(202);
        expect(deleteResponse.body.message).to.equal('202 Accepted');
      });
    });
  });

  afterEach(() => {
    if (projectId) {
      cy.api_getAllProjects(accessToken, projectId).then((response) => {
        expect(response.status).to.equal(200);
      });
    }
  });
});


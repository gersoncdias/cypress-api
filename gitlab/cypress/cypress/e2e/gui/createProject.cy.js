import {faker} from '@faker-js/faker';
const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
const project = {
  name: `project-${faker.company.buzzNoun()}`,
  description: faker.lorem.words(3),
};

describe('Create Project', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('url'));
      cy.login(user, password);
    });
  
    it('successfully', () => {
        cy.gui_createProject(project);
    });
});

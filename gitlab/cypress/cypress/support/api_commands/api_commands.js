const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`
const baseUrl = Cypress.env('url');


Cypress.Commands.add('api_createProject', (project, accessToken) => {
  cy.api({
    method: 'POST',
    url: `${baseUrl}/api/v4/projects/`,
    failOnStatusCode: false,
    body: {
      name: project.name,
      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_getAllProjects', accessToken => {
  cy.api({
    method: 'GET',
    url: `${baseUrl}/api/v4/projects/`,
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_deleteProjects', (accessToken, projectId) => {
  cy.api_getAllProjects(accessToken).then(res => {
    res.body.forEach(project => {
      cy.api({
        method: 'DELETE',
        url: `${baseUrl}/api/v4/projects/${project.id}`,
        failOnStatusCode: false,
        headers: { Authorization: accessToken },
      });
    });
  });
});

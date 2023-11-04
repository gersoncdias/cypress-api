const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`
const baseUrl = Cypress.env('url');


Cypress.Commands.add('api_createProject', project => {
  cy.request({
    method: 'POST',
    url: `${baseUrl}/api/v4/projects/`,
    body: {
      name: project.name,
      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_getAllProjects', () => {
  cy.request({
    method: 'GET',
    url: `${baseUrl}/api/v4/projects/`,
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_deleteProjects', () => {
  cy.api_getAllProjects().then(res =>
    res.body.forEach(project => cy.request({
      method: 'DELETE',
      url: `${baseUrl}/api/v4/projects/${project.id}`,
      headers: { Authorization: accessToken },
    }))
  )
})
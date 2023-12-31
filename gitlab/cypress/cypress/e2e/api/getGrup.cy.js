const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`
const groupPath = "qa-teste";

describe("Teste da API grupo GitLab", () => {
    it("Deve obter informações de um grupo do GitLab", () => {
     
  
      cy.getGitLabGroupInfo(groupPath, accessToken)
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.data.group.id).to.eq("gid://gitlab/Group/27");
        expect(response.body.data.group.description).to.eq("teste de descrição");
      });
    });
  });
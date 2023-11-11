const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`
const groupPath = "qa-teste";

describe("Teste da API grupo GitLab", () => {
    it("Deve obter informações de um grupo do GitLab", () => {
     
  
      cy.getGitLabGroupInfo(groupPath, accessToken)
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("data");
        expect(response.body.data).to.have.property("group");
        expect(response.body.data.group).to.have.property("id");
        expect(response.body.data.group).to.have.property("description");
        expect(response.body.data.group.id).to.eq("gid://gitlab/Group/3");
        expect(response.body.data.group.description).to.eq("teste de descrição");
      });
    });
  });
  
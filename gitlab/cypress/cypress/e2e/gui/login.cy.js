const user = Cypress.env("user_name");
const password = Cypress.env("user_password");
let gitlabSessionCookie;
let conteudoDoArquivo

describe("Login Test", () => {
  afterEach(() => {
    Cypress.env("gitlabSessionCookie", gitlabSessionCookie);
  });

  it("Login", () => {
    cy.visit(Cypress.env("url"));
    cy.login(user, password);

    cy.getCookie("_gitlab_session").then((cookie) => {
      gitlabSessionCookie = cookie.value;
      console.log("Sessão de login armazenada:", gitlabSessionCookie);

    cy.writeFile('../cypress/temporario.txt', gitlabSessionCookie)
      .then(() => {
        console.log('Valor do cookie escrito no arquivo temporário com sucesso.');
      });
    });
  });
});

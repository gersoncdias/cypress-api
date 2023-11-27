describe("Logout Test", () => {
  it("Logout", () => {
    cy.lerCookieDoArquivo().then((conteudoDoArquivo) => {
      cy.visit(Cypress.env("url"), {
        headers: {
          cookie: `_gitlab_session=${conteudoDoArquivo}`,
        },
      });

      cy.logout();
    
    });
  });
});
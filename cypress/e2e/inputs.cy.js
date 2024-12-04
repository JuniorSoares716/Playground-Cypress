describe("Input Fields", () => {
  beforeEach(() => {
    cy.goHome();
    cy.login("papito@cyskills.com.br", "showtime");
    cy.userLoggedIn();
  });

  it("Deve preencher o campo texto", () => {
    cy.get('nav a[href="/input-fields"]').click();
    cy.contains("h2", "Input Fields").should("be.visible");

    cy.get("input#fullname").type("Junior Soares");

    cy.get("input#email").type("junior@gmail.com");

    cy.get("input#number").type("1234456");
    cy.get("input#date").type("2024-12-04");
  });
});

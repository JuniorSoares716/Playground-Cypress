describe("Input Fields", () => {
  beforeEach(() => {
    cy.goHome();
    cy.login("papito@cyskills.com.br", "showtime");
    cy.userLoggedIn();
  });

  it("Deve preencher o campo texto", () => {

    cy.goTo('/input-fields','Input Fields');
    
    cy.get("input#fullname").type("Junior Soares");

    cy.get("input#email").type("junior@gmail.com");

    cy.get("input#number").type("1234456");
    cy.get("input#date").type("2024-12-04");
  });
});

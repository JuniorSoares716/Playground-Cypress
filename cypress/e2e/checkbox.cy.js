describe("Checkbox", () => {
  beforeEach(() => {
    cy.goHome();
    cy.login("papito@cyskills.com.br", "showtime");
    cy.userLoggedIn();
    cy.goTo("/checkbox", "Checkbox");
  });

  it("Deve selecionar os checkbox", () => {
    cy.get('input[name="javascript"]').parent().click();
    cy.get('label[for="typescript"]').click();
  });

  it("Deve selecionar todos os checkbox", () => {
    const langs = ["javascript", "python", "rust", "go", "typescript"];

    langs.forEach((element) => {
      cy.get(`label[for="${element}"]`).click();
    });
  });
});

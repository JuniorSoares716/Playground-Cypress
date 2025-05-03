describe("Checkbox", () => {
  beforeEach(() => {
    cy.goHome();
    cy.login("papito@cyskills.com.br", "showtime");
    cy.userLoggedIn();
    cy.goTo("/select", "Select");
  });

  it("Deve selecionar o cypress", () => {
    cy.contains("label", "Selecione um Framework de Testes")
      .parent()
      .find("select")
      .select("Cypress");
  });

  it.only("Deve escolher mais de 1 lingagem", () => {
    const langs = ['JavaScript', 'TypeScript'];

    cy.get('input[placeholder^="Linguagens de programação"]').click();

    langs.forEach((lang) => {
      cy.contains(".option-item", lang).click();
    });
  });
});

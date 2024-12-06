describe("TextArea", () => {
  beforeEach(() => {
    cy.goHome();
    cy.login("papito@cyskills.com.br", "showtime");
    cy.userLoggedIn();
    cy.goTo("/textarea", "Textarea");
  });

  it("Deve preencher o campo de textarea", () => {
    cy.get("textarea[name=message").type(
      "Veniam culpa exercitation minim consectetur labore eiusmod ullamco. Ex aliquip do sunt id nulla esse reprehenderit. Labore anim elit elit laborum amet magna. Sint dolor nisi dolore Lorem labore quis tempor pariatur aliqua aliquip nulla laborum."
    );
  });
});

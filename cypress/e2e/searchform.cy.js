describe("SearchForm component", () => {
  it('submits the search query when the "Search" button is clicked', () => {
    cy.visit("http://localhost:3000");
    cy.get(".form-input").clear();
    cy.get(".form-input").type("Golamaal 3");
    cy.get(".form-button").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Performing a search for your movie: Golamaal 3");
    });
  });

  it("submits the search query when the Enter key is pressed", () => {
    cy.visit("http://localhost:3000");
    cy.get(".form-input").clear();
    cy.get(".form-input").type("Golamaal 3{enter}");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Performing a search for your movie: Golamaal 3");
    });
  });
});

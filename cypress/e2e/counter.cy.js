describe("template spec", () => {
  it("First test", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Counter Component", () => {
  it('increments the counter when the "Increment count" button is clicked', () => {
    cy.visit("http://localhost:3000");
    cy.get(".counter-button-inc").click();
    cy.get(".counter-container").should("contain", "Current count: 11");
    cy.get(".counter-button-inc").click();
    cy.get(".counter-container").should("contain", "Current count: 12");
  });

  it('decrements the counter when the "Decrement count" button is clicked', () => {
    cy.visit("http://localhost:3000");
    cy.get(".counter-button-dec").click();
    cy.get(".counter-container").should("contain", "Current count: 9");
    cy.get(".counter-button-dec").click();
    cy.get(".counter-container").should("contain", "Current count: 8");
  });
});

import cy from "cypress";
describe("Demo", () => {
  it("visit url", () => {
    cy.visit("http://localhost:3000/");
  });
  it("Button click", () => {
    cy.get("#btt").click();
  });
  it("Name get", () => {
    cy.get("#namee").type("alexa");
  });
  it("Age get", () => {
    cy.get("#datt").type("1997-05-09");
  });
});

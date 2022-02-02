describe("Login to dashboard", () => {
  it("should get home page", () => {
    cy.visit("https://nxmeasurement.vercel.app/");
    cy.get("h1").contains("Twórz pomiary dla swoich klientów w NXMeasurement");
  });
  it("should navigate to login page", () => {
    cy.contains("a", "zaloguj się").click();
    cy.url().should("include", "/auth/login");
  });
  it("should login to dashboard", () => {
    cy.get("input[name='email']").type("jan.kowalski.test@gmail.com");
    cy.get("input[name='password']").type("jankowalskitest");
    cy.get("button").contains("Zaloguj się").click();
    cy.url().should("include", "/dashboard/profile");
  });
});

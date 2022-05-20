class RegistryPage {
  fillForm() {
    cy.url().should("include", "#account-creation");
    cy.get("#email").should("have.value", user.email);
    this.fillCheckRadio();
    cy.get("#customer_firstname").type(user.name.first);
    cy.get("#customer_lastname").type(user.name.last);
    cy.get("#passwd").type("Abc123$%");
    cy.get("#address1").type(Faker.Address.streetAddress());
    cy.get("#city").type(Faker.Address.city());
    cy.get("#id_state").select("3");
    cy.get("#postcode").type("12451");
    cy.get("#phone_mobile").type("11997894512");
  }

  fillCheckRadio() {
    cy.get("#id_gender1").check();
  }

  clickFinishRegistry() {
    cy.get("#submitAccount > span").click();
  }

  validateEmail() {
    cy.get(".account > span").should(
      "have.text",
      `${user.name.first} ${user.name.last}`
    );
  }
}

export default RegistryPage;

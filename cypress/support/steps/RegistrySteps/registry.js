///<reference  types="cypress"/>

import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegistryPage from "cypress/integration/pageObject";

const registryPage = new RegistryPage();

const Faker = require("faker");

describe("User Registry", () => {
  let user;

  before(() => {
    user = {
      email: Faker.Internet.email(),
      name: {
        first: Faker.Name.firstName(),
        last: Faker.Name.lastName(),
      },
    };
    cy.visit("?controller=authentication&back=my-account");
  });

  it("Informar um email valido", () => {
    cy.get("#email_create").type(`${user.email}{enter}`);
  });

  it("preencher o formulario de cadastro", () => {
    registryPage.fillForm();
  });

  it("Finalizar o cadastro do usuario", () => {
    registryPage.clickFinishRegistry();
  });

  it("Efetuar o sing out da pagina", () => {
    cy.get(".logout").click();
  });

  it("Informar um email invalido", () => {
    cy.get("#email_create").type(`${user.email}{enter}`);
  });

  // it("Validar obrigatoriedade do formulario", () =>{
  //     cy.get('#email_create').type(`${Faker.Internet.email()}{enter}`)
  //      .then(cy.get('#submitAccount > span').click())
  //         .then(cy.get('#center_column > div').should("be.visible"))
  // })
});

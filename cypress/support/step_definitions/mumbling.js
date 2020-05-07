/* eslint-disable no-undef */
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^the mumbling app in QA$/, () => {
  cy.visit("http://localhost:3000");
});

When(/^I insert the word (.*)$/, value => {
  cy.get('[data-test="mumble-input"]').type(value);
  cy.get('[data-test="mumble-input"]').should("not.be.empty");
});

Then(/^I will get (.*)$/, value => {
  cy.server();
  cy.route("POST", "/mumbling*", { result: value }).as("getMumble");

  cy.get('[data-test="component-button"]').click();

  cy.wait("@getMumble");
  cy.get('[data-test="mumble-output"]')
    .should("be.visible")
    .and("contains.text", value);
});

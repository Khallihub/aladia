/* ==== Test Created with Cypress Studio ==== */
it('LogIn', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://127.0.0.1:3000/login');
  cy.wait(1000)
  cy.takeSnapshot()
  cy.get('[data-test="sign_in-input"]').clear('k');
  cy.get('[data-test="sign_in-input"]').type('khalid@aladia.com');
  cy.get('[data-test="submit_button"]').click();

  cy.wait(1000)
  cy.takeSnapshot()
  cy.get('[data-test="sign_up-name-input"]').clear('K');
  cy.get('[data-test="sign_up-name-input"]').type('Khalid');
  cy.get('[data-test="sign_up-surname-input"]').clear('A');
  cy.get('[data-test="sign_up-surname-input"]').type('Abdu');
  cy.get('[data-test="sign_up-password-input"]').clear('a');
  cy.get('[data-test="sign_up-password-input"]').type('asdfjk');
  cy.get('[data-test="sign_up-confirm_password-input"]').clear('a');
  cy.get('[data-test="sign_up-confirm_password-input"]').type('asdfjk');
  cy.get('[data-test="submit_button"]').click();
  cy.wait(1000)
  cy.takeSnapshot()
  cy.get('[data-test="submit_button"]').click();

  cy.wait(1000)
  cy.takeSnapshot()
  cy.get('[data-test="sign_in-input"]').clear()
  cy.get('[data-test="sign_in-input"]').type('khalid@aladia.com');
  cy.get('[data-test="submit_button"]').click();

  cy.wait(1000)
  cy.takeSnapshot()
  cy.get('[data-test="sign_in-input-pass"]').type('asdfjk');
  cy.get('[data-test="submit_button"]').click();
  cy.get('[data-test="welcome-text"]').click();

  cy.wait(1000)
  cy.takeSnapshot()
  /* ==== End Cypress Studio ==== */
});
/* ==== Test Created with Cypress Studio ==== */
it('Sign up flow', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/login');
  cy.wait(1000)
  cy.takeSnapshot()
  cy.get('[data-test="sign_in-input"]').clear('k');
  cy.get('[data-test="sign_in-input"]').type('khalid@aladia.com');
  cy.get('[data-test="submit_button"]').click();

  cy.wait(1000)
  cy.takeSnapshot()
  cy.get('[data-test="sign_up-name-input"]').clear('K');
  cy.get('[data-test="sign_up-name-input"]').type('Khalid');
  cy.get('[data-test="sign_up-surname-input"]').clear();
  cy.get('[data-test="sign_up-surname-input"]').type('Abdu');
  cy.get('[data-test="sign_up-email-input"]').clear();
  cy.get('[data-test="sign_up-email-input"]').type('khalid@aladia.com');
  cy.get('[data-test="sign_up-password-input"]').clear();
  cy.get('[data-test="sign_up-password-input"]').type('qwerty');
  cy.get('[data-test="sign_up-confirm_password-input"]').clear('qwerty');
  cy.get('[data-test="sign_up-confirm_password-input"]').type('qwerty');
  cy.get('[data-test="submit_button"]').click();

  cy.wait(1000)
  cy.takeSnapshot()
  cy.get(':nth-child(4) > .justify-between > :nth-child(1)').clear('1');
  cy.get(':nth-child(4) > .justify-between > :nth-child(1)').type('1');
  cy.get('.justify-between > :nth-child(2)').clear();
  cy.get('.justify-between > :nth-child(2)').type('2');
  cy.get('.justify-between > :nth-child(3)').clear();
  cy.get('.justify-between > :nth-child(3)').type('3');
  cy.get('.justify-between > :nth-child(4)').clear();
  cy.get('.justify-between > :nth-child(4)').type('4');
  cy.get('.justify-between > :nth-child(5)').clear();
  cy.get('.justify-between > :nth-child(5)').type('5');
  cy.get('.justify-between > :nth-child(6)').clear();
  cy.get('.justify-between > :nth-child(6)').type('6');

  cy.takeSnapshot()
  /* ==== End Cypress Studio ==== */
});
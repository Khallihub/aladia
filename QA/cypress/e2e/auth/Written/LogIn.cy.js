describe("Login Flow", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:3000/login");
    });

    it("log in component check", () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-name-input]').type("Khalid")
        cy.get('[data-test=sign_up-surname-input]').type("Abdu")
        cy.get('[data-test=sign_up-email-input]').should("have.value", "test@example.com")
        cy.get('[data-test=sign_up-password-input]').type("A`|Uf}4&o1@-")
        cy.get('[data-test=sign_up-confirm_password-input]').type("A`|Uf}4&o1@-")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_con-name]').should("have.text", "Khalid Abdu")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test="sign_in-input"]').clear()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()

        cy.get('[data-test="sign_in-info-pass"]').should("contain.text", "Enter your password")
        cy.get('[data-test="sign_in-input-pass"]').type("A`|Uf}4&o1@-")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test="welcome-text"]').click()

        cy.takeSnapshot()
    });

});
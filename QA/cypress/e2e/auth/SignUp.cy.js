    
describe('Signup Flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });

    it("sign in component check", () => {
        cy.wait(1000)
        cy.takeSnapshot()

        cy.get('[data-test="welcome-text"]')
            .should('have.text', 'Welcome to Aladia,');
        cy.get('[data-test="welcome-info"]')
            .should('have.text', 'Create or access your account from here');
        cy.get('[data-test="sign_in-info"]')
            .should('contain.text', 'Enter your email');
        cy.get('[data-test="sign_in-input"]').should('be.visible');
        cy.get('[data-test="sign_in-input"]').type("test");
        cy.get('[data-test="sign_in-error"]').should('be.visible');
        cy.get('[data-test="submit_button"]')
            .should('have.text', 'Enter');
        cy.get('[data-test="sign_in-socials"]')
            .should('contain.text', 'Continue with Google');
        cy.get('[data-test="sign_in-socials"]')
            .should('contain.text', 'Continue with Facebook');
        cy.get('[data-test="sign_in-socials"]')
            .should('contain.text', 'Continue with Apple');
        cy.get('[data-test="sign_in-terms"]')
            .should('contain.text', 'Terms & Conditions');

        cy.takeSnapshot()
    })

    it('should navigate to next page form if email is valid', () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('.next-icon')
            .should('contain.text', 'Back to Log in');
        cy.takeSnapshot()
    });

    it('should not navigate to next page form if email is invalid', () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test="welcome-text"]')
            .should('have.text', 'Welcome to Aladia,');
        cy.takeSnapshot()
    });

    it('should display invalid email text', () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test")
        cy.get('[data-test="sign_in-error"]').should("have.text", "Invalid email")

        cy.takeSnapshot()
    })

    it("sign up component check", () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('.next-icon')
            .should('contain.text', 'Back to Log in');
        cy.get('[data-test=sign_up-greet]').should("have.text", "Nice to meet you,")
        cy.get('[data-test=sign_up-info]').should("have.text", "Upload a profile picture and complete your presentation")
        cy.get('[data-test=sign_up-terms]').should("contain.text", "I accept Terms & Conditions and Privacy Policy")
        cy.get('[data-test=sign_up-command]').should("have.text", "Enter your details")
        cy.get('[data-test=sign_up-name-input]').click()
        cy.get('[data-test=sign_up-name-input-error]').should("have.text", "Name is required")
        cy.get('[data-test=sign_up-surname-input]').click()
        cy.get('[data-test=sign_up-surname-input-error]').should("have.text", "Surname is required")
        cy.get('[data-test=sign_up-password-input]').click()
        cy.get('[data-test=sign_up-password-input-error]').should("have.text", "Password must be at least 6 characters")
        cy.get('[data-test=sign_up-password-input]').type("123456")
        cy.get('[data-test=sign_up-confirm_password-input]').click()
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-confirm_password-input-error]').should("have.text", "Passwords do not match")
        cy.get('[data-test="submit_button"]')
            .should('have.text', 'Enter');
        cy.get('[data-test="sign_up-terms-link"]')
            .should('contain.text', 'Terms & Conditions');

        cy.takeSnapshot()
    })

    it("should navigate to confirmation page if input is correct", () => {
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
        cy.takeSnapshot()
    })

    it("should not navigate if Name is empty", () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-surname-input]').type("Abdu")
        cy.get('[data-test=sign_up-email-input]').should("have.value", "test@example.com")
        cy.get('[data-test=sign_up-password-input]').type("A`|Uf}4&o1@-")
        cy.get('[data-test=sign_up-confirm_password-input]').type("A`|Uf}4&o1@-")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-greet]').should("have.text", "Nice to meet you,")
        cy.takeSnapshot()

    })

    it("should not navigate if Surname is empty", () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-name-input]').type("Khalid")
        cy.get('[data-test=sign_up-email-input]').should("have.value", "test@example.com")
        cy.get('[data-test=sign_up-password-input]').type("A`|Uf}4&o1@-")
        cy.get('[data-test=sign_up-confirm_password-input]').type("A`|Uf}4&o1@-")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-greet]').should("have.text", "Nice to meet you,")
        cy.takeSnapshot()
    })

    it("should not navigate if Email is empty", () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-name-input]').type("Khalid")
        cy.get('[data-test=sign_up-surname-input]').type("Abdu")
        cy.get('[data-test="sign_up-email-input"]').clear()
        cy.get('[data-test=sign_up-password-input]').type("A`|Uf}4&o1@-")
        cy.get('[data-test=sign_up-confirm_password-input]').type("A`|Uf}4&o1@-")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-greet]').should("have.text", "Nice to meet you,")
        cy.takeSnapshot()

    })

    it("should not navigate if Password is empty or weak", () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-name-input]').type("Khalid")
        cy.get('[data-test=sign_up-surname-input]').type("Abdu")
        cy.get('[data-test=sign_up-email-input]').should("have.value", "test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-greet]').should("have.text", "Nice to meet you,")
        cy.get('[data-test=sign_up-password-input]').type("A`")
        cy.get('[data-test=sign_up-confirm_password-input]').type("A")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-greet]').should("have.text", "Nice to meet you,")
        cy.takeSnapshot()

    })

    it("should not navigate if passwords don't match", () => {
        cy.wait(1000)
        cy.takeSnapshot()
        cy.get('[data-test="sign_in-input"]').type("test@example.com")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-name-input]').type("Khalid")
        cy.get('[data-test=sign_up-surname-input]').type("Abdu")
        cy.get('[data-test=sign_up-email-input]').should("have.value", "test@example.com")
        cy.get('[data-test=sign_up-password-input]').type("password")
        cy.get('[data-test=sign_up-confirm_password-input]').type("another password")
        cy.get('[data-test="submit_button"]').click()
        cy.get('[data-test=sign_up-confirm_password-input-error]').should("have.text", "Passwords do not match")
        cy.get('[data-test=sign_up-greet]').should("have.text", "Nice to meet you,")
        cy.takeSnapshot()

    })

    it("confirmation component check", () => {
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
        cy.get('[data-test=sign_con-thanks]').should("have.text", "Thanks for joining Aladia.")
        cy.get('[data-test=sign_con-info]').should("have.text", "Please enter below the 6-digit code we sent you through your registration e-mail:")
        cy.get('[data-test=sign_con-que]').should("have.text", "You didn't receive any mail?")
        cy.takeSnapshot()

    })
});

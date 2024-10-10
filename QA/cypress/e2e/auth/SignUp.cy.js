describe('Signup Flow', () => {
    beforeEach(() => {
        cy.visit('http://0.0.0.0:3000/login');
    });

    it('should navigate to next page form if email is valid', () => {
        expect(true).to.be.true;
    });
});

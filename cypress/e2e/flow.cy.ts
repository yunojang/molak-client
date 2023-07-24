describe('flow', () => {
  it('passes', () => {
    cy.visit('http://localhost:5000');
  });

  it('click start', () => {
    cy.findByRole('button', { name: /start/i }).click();

    cy.url().should('eq', 'http://localhost:5000/auth/login');
  });

  it('login', () => {
    const user = { email: 'abc123@wizcore.co.kr', password: 'qwerty12345' };

    cy.findByLabelText(/email/i).type(user.email);
    cy.findByLabelText(/password/i).type(user.password);
    cy.findByRole('button', { name: /login/i }).click();

    cy.url().should('eq', 'http://localhost:5000/');
  });
});

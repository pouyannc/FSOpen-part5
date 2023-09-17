describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`);
    const user = { username: 'testuser', password: 'password' };
    cy.request('POST', `${Cypress.env('BACKEND')}/users`, user);
    cy.visit('');
  });

  it('Login form is shown', function () {
    cy.contains('Login');
    cy.contains('Username');
    cy.contains('Password');
    cy.get('input');
  });

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username').type('testuser');
      cy.get('#password').type('password');
      cy.get('#login-btn').click();

      cy.contains('logged in as testuser');
    });

    it('fails with wrong credentials', function () {
      cy.get('#username').type('testuser');
      cy.get('#password').type('wrong');
      cy.get('#login-btn').click();

      cy.contains('Login');
      cy.get('.alert').contains('wrong username or password');
      cy.get('html').should('not.contain', 'logged in');
    });
  });

  describe('When logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'testuser', password: 'password' });
    });

    it('A blog can be created', function () {
      cy.contains('Create new').click();
      cy.get('#title').type('testblog');
      cy.get('#author').type('author');
      cy.get('#url').type('url');
      cy.contains('create').click();

      cy.contains('testblog');
      cy.contains('By author');
      cy.get('.alert').contains('New entry created: testblog');

      cy.request('GET', `${Cypress.env('BACKEND')}/blogs`).then(({ body }) => {
        expect(body.length).to.eq(1);
      });
    });
  });
});

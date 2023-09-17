describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset');
    const user = { username: 'testuser', password: 'password' };
    cy.request('POST', 'http://localhost:3003/api/users', user);
    cy.visit('http://localhost:5173');
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
      cy.contains('wrong username or password');
    });
  });

  // describe('When logged in', function () {
  //   beforeEach(function () {

  //   })

  //   it('A blog can be created', function () {

  //   });
  // });
});

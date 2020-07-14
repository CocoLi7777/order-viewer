describe('Order Page Test with page number and page size', function () {
  it('successfully loads', function () {
    cy.visit('http://localhost:3000');
    cy.get('table').find('tr').should('have.length', 12);
  });
});

describe('Order Page Test with changing page size', function () {
  it('successfully loads', function () {
    cy.visit('http://localhost:3000');
    cy.get('table').get('select').select('2').should('have.value', 2);
  });
});

describe('Order Page Test with searching order name', function () {
  it('successfully loads', function () {
    cy.visit('http://localhost:3000');
    cy.get('input[name="search"]').type('001-');
    cy.get('table').get('select').select('2').should('have.value', 2);
  });
});

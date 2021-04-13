describe('CarryOkay', () => {

  describe('App Load', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('should display App title and greeting', () => {
      cy.get('h1').contains("CarryOkay");
      cy.get('p').contains("Hello friend 😬");
    });

    it('should contain Navigation links', () => {
      cy.get('a').contains("My Songs");
      cy.get('a').contains("Song Book");
    });
    
  });

  describe('Navigation', () => {






  });

  describe('My Songs', () => {






  });

  describ('Song Book', () => {






  });

});

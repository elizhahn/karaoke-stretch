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
      cy.get('a[id="my-songs"]').contains("My Songs");
      cy.get('a[id="song-book"]').contains("Songbook");
    });

  });

  describe('Navigation', () => {

    //GET REQUEST stub / intercept here

    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

  



  });

  describe('My Songs', () => {






  });

  describe('Song Book', () => {






  });

});

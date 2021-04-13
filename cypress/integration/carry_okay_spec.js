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

    it('should be able to navigate to My Songs view from Home view', () => {
      cy.get('a[id="my-songs"]').click();
      cy.get("CarryOkay").should('not.exist');
      cy.get("Hello friend 😬").should('not.exist');
    });

    it('should be able to navigate to Song Book view from Home view', () => {
      cy.get('a[id="song-book"]').click();
      cy.get("CarryOkay").should('not.exist');
      cy.get("Hello friend 😬").should('not.exist');
    });

    it('should be able to navigate from My Songs view to Home view', () => {
      cy.get('a[id="my-songs"]').click();
      cy.expect('true').to.equal('false');
    });

    it('should be able to navigate from Song Book view to Home view', () => {
      cy.get('a[id="song-book"]').click();
      cy.expect('true').to.equal('false');
    });

    it('should be able to navigate from My Songs view to Song Book view', () => {
      cy.get('a[id="my-songs"]').click();
      cy.get('a[id="song-book"]').click();
      cy.get('p').contains("Made it to songbook");
      //WILL NEED TO BE REFACTORED WHEN PAGE TITLE IS UPDATED
    });

    it('should be able to navigate from Song Book view to My Songs view', () => {
      cy.get('a[id="song-book"]').click();
      cy.get('a[id="my-songs"]').click();
      cy.get('p').contains("Made it to mysongs");
      //WILL NEED TO BE REFACTORED WHEN PAGE TITLE IS UPDATED
    });

  });

  describe('My Songs', () => {

    // cy.get('h1').contains('My Songs');
    // cy.get('a[id="my-songs"]').contains("My Songs");
    // cy.get('a[id="song-book"]').contains("Songbook");




  });

  describe('Song Book', () => {






  });

});

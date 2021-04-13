describe('CarryOkay', () => {

 beforeEach(() => {
  cy.visit('http://localhost:3000');
 });

  describe('App Load', () => {

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

    beforeEach(() => {
      cy.get('a[id="my-songs"]').click();
    });

    it('should display My Song page components', () => {
      cy.get('h1').contains('My Songs');
      cy.get('a[id="my-songs"]').contains("My Songs");
      cy.get('a[id="song-book"]').contains("Songbook");
    });

    it(`should display list of user's songs`, () => {
      cy.get('a[id="song-book"]').click();
      cy.get('button[id="1"]').click();
      cy.get('a[id="my-songs"]').click();
      cy.get('div[class="song-card"]').contains("Radiohead");
      cy.get('div[class="song-card"]').contains("electronica");
      cy.get('div[class="song-card"]').contains("alternative rock");
      cy.get('img').should('exist');
      cy.get('button[id="1"]').should('not.exist');

      cy.get('a[id="song-book"]').click();
      cy.get('button[id="2"]').click();
      cy.get('a[id="my-songs"]').click();
      cy.get('div[class="song-card"]').contains("Usher");
      cy.get('div[class="song-card"]').contains("pop");
      cy.get('div[class="song-card"]').contains("R&B");
      cy.get('img').should('exist');
      cy.get('button[id="2"]').should('not.exist');
    });

  });

  describe('Song Book', () => {

   




  });

});

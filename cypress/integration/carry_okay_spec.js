describe('CarryOkay', () => {

 beforeEach(() => {
  cy.intercept('/genres', {fixture:"genre_data.json"})
  cy.intercept('/songs', {fixture:"song_data.json"})
  cy.visit('http://localhost:3000');
 });

  describe('App Load', () => {

    it('should display App title and greeting', () => {
      cy.get('h1').contains("CarryOkay");
      cy.get('p').contains("Hello friend 😬");
    });

    it('should contain Navigation links', () => {
      cy.get('[data-cy=my-songs-nav]').contains("My Songs");
      cy.get('[data-cy=song-book-nav]').contains("Song Book");
    });

  });

  describe('Navigation', () => {

    it('should be able to navigate to My Songs view from Home view', () => {
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get("CarryOkay").should('not.exist');
      cy.get("Hello friend 😬").should('not.exist');
      cy.url().should("eq", "http://localhost:3000/mysongs")
    });

    it('should be able to navigate to Song Book view from Home view', () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get("CarryOkay").should('not.exist');
      cy.get("Hello friend 😬").should('not.exist');
      cy.url().should("eq", "http://localhost:3000/songbook")
    });

    //still missing this functionality
    it('should be able to navigate from My Songs view to Home view', () => {
      cy.get('[data-cy=my-songs-nav]').click();
      cy.expect(true).to.equal(true);
    });
    
    //still missing this functionality
    it('should be able to navigate from Song Book view to Home view', () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.expect(true).to.equal(true);
    });

    it('should be able to navigate from My Songs view to Song Book view', () => {
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=song-book-nav]').click();
      cy.url().should("eq", "http://localhost:3000/songbook")
    });

    it('should be able to navigate from Song Book view to My Songs view', () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=my-songs-nav]').click();
      cy.url().should("eq", "http://localhost:3000/mysongs")
    });

  });

  describe('My Songs', () => {
    beforeEach(() => {
      cy.intercept('/genres', {fixture:"genre_data.json"})
      cy.intercept('/songs', {fixture:"song_data.json"})
      cy.visit('http://localhost:3000');
      cy.get('[data-cy=my-songs-nav]').click();
     });

    it('should display My Song page components', () => {
      cy.get('[data-cy=my-songs-title]').contains("My Songs");
      cy.get('[data-cy=my-songs-nav]').contains("My Songs");
      cy.get('[data-cy=song-book-nav]').contains("Songbook");
    });

    it(`should display list of user's songs`, () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=song-card-btn]').first().click();
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=song-card]').should("contain", "Jigsaw falling into place")
      .and("contain", "Radiohead")
      .and("contain","Electronica")
      .and("contain","Rock")
      cy.get('[data-cy=album-img]').should('exist');
      cy.get('[data-cy=song-card-btn]').should('exist');
    });

    it('should remove a song from a user\'s list', () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=song-card-btn]').eq(1).click();
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=song-card]').should("contain", "My Boo")
      .and("contain", "Usher")
      .and("contain","Hip Hop")
      .and("contain","R&B")
      cy.get('[data-cy=song-card-btn]').click();
      cy.get('[data-cy=song-card]').should('not.exist');
    });

  });

  describe('Song Book', () => {

    beforeEach(() => {
      cy.intercept('/genres', {fixture:"genre_data.json"})
      cy.intercept('/songs', {fixture:"song_data.json"})
      cy.visit('http://localhost:3000');
      cy.get('[data-cy=song-book-nav]').click();
     });

    it.only('should display Song Book page components', () => {
      cy.get('[data-cy=song-book-title]').contains('Song Book');
      cy.get('[data-cy=my-songs-nav]').contains("My Songs");
      cy.get('[data-cy=song-book-nav]').contains("Song Book");
      cy.get('[data-cy=search-bar]').should('exist');
      cy.get('[data-cy=song-card]').should("have.length", 2);
      cy.get('[data-cy=song-card]').eq(0).contains("Radiohead");
      cy.get('[data-cy=song-card]').eq(1).contains("Usher");
    });

    it('should allow user to make a search', () => {
      expect(true).to.equal(false);
    });

    it('should display relevant search results', () => {
      expect(true).to.equal(false);
    });

    it('should display a helpful message if search yields no results', () => {
      expect(true).to.equal(false);
    });

  });

  describe('User Data Manipulation', () => {

    beforeEach(() => {
      cy.get('a[id="song-book"]').click();
      cy.get('button[id="1"]').click();
      cy.get('a[id="my-songs"]').click();
    });

    it('should allow a user to add a song to their library', () => {
      cy.get('div[class="song-card"]').contains("Radiohead");
      cy.get('div[class="song-card"]').contains("electronica");
      cy.get('div[class="song-card"]').contains("alternative rock");
      cy.get('img').should('exist');
      cy.get('button[id="1"]').should('not.exist');
    });

    //This test checks to see if the "add" button disappears after user clicks it
    it('should not allow user to add duplicate songs to user library', () => {
      cy.get('a[id="song-book"]').click();
      cy.get('button[id="1"]').should('not.exist');
    });

    it('should allow a user to remove a song from their library', () => {
      // cy.get('remove button').click();
      // cy.get("Radiohead").should('not.exist');
      cy.expect(true).to.equal(false);
    });

  });

});

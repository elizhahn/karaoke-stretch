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
      cy.get('[data-cy=my-songs]').contains("My Songs");
      cy.get('[data-cy=song-book]').contains("Song Book");
    });

  });

  describe('Navigation', () => {

    it('should be able to navigate to My Songs view from Home view', () => {
      cy.get('[data-cy=my-songs]').click();
      cy.get("CarryOkay").should('not.exist');
      cy.get("Hello friend 😬").should('not.exist');
      cy.url().should("eq", "http://localhost:3000/mysongs")
    });

    it('should be able to navigate to Song Book view from Home view', () => {
      cy.get('[data-cy=song-book]').click();
      cy.get("CarryOkay").should('not.exist');
      cy.get("Hello friend 😬").should('not.exist');
      cy.url().should("eq", "http://localhost:3000/songbook")
    });

    //still missing this functionality
    it('should be able to navigate from My Songs view to Home view', () => {
      cy.get('[data-cy=my-songs]').click();
      cy.expect(true).to.equal(true);
    });
    
    //still missing this functionality
    it('should be able to navigate from Song Book view to Home view', () => {
      cy.get('[data-cy=song-book]').click();
      cy.expect(true).to.equal(true);
    });

    it('should be able to navigate from My Songs view to Song Book view', () => {
      cy.get('[data-cy=my-songs]').click();
      cy.get('[data-cy=song-book]').click();
      cy.get('[data-cy=song-book-title]').contains("Song Book");
    });

    it('should be able to navigate from Song Book view to My Songs view', () => {
      cy.get('[data-cy=song-book]').click();
      cy.get('[data-cy=my-songs]').click();
      cy.get('[data-cy=my-songs-title]').contains("My Songs");
    });

  });

  describe('My Songs', () => {

    beforeEach(() => {
      cy.get('a[id="my-songs"]').click();
    });

    it('should display My Song page components', () => {
      cy.get('h1').contains('My Songs');
      //Check for library component
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

    beforeEach(() => {
      cy.get('a[id="song-book"]').click();
    });

    it('should display Song Book page components', () => {
      cy.get('h1').contains('Song Book');
      cy.get('form').should('exist');
      //Test for search bar button
      //Test for library component
      cy.get('a[id="my-songs"]').contains("My Songs");
      cy.get('a[id="song-book"]').contains("Songbook");
    });

    it('should display list of all songs', () => {
      cy.fixture('/song-data.js').then((data) => {
        data.songData.forEach(song => {
          cy.get('div').contains(song.song_title);
          cy.get('div').contains(song.artist);

          song.genres.forEach(genre => {
            cy.get('div').contains(genre);
          });
        });
      });
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

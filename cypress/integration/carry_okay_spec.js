describe('CarryOkay', () => {

  describe('Server error message', () => {
  
    it('Should display a message to the user if there and issue with the server', () =>{
      cy.intercept({
        method: 'GET', 
        url:'/songs'
      },
      {
        statusCode: 500,
      })
      cy.visit('http://localhost:3000');
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=server-error-msg]').contains('Oops, our system seems to be down... how embarassing. Try again in a few moments!');
  
    });
  });
  
 beforeEach(() => {
  cy.intercept( '/genres', {fixture:"genre_data.json"})
  cy.intercept('/songs', {fixture:"song_data.json"})
  cy.visit('http://localhost:3000');
 });

  describe('App Load', () => {

    it('should display App title and greeting', () => {
      cy.get('[data-cy=App-title]').contains("CarryOkay");
      cy.get('[data-cy=home-greeting]').contains("Ready to sing?");
    });

    it('should contain Navigation links', () => {
      cy.get('[data-cy=my-songs-nav]').contains("My Songs");
      cy.get('[data-cy=song-book-nav]').contains("Song Book");
    });
  });

  describe('Navigation', () => {

    it('should be able to navigate to My Songs view from Home view', () => {
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=App-title]').should('not.exist');
      cy.get('[data-cy=home-greeting]').should('not.exist');
      cy.url().should('eq', 'http://localhost:3000/mysongs');
    });

    it('should be able to navigate to Song Book view from Home view', () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=App-title]').should('not.exist');
      cy.get('[data-cy=home-greeting]').should('not.exist');
      cy.url().should('eq', 'http://localhost:3000/songbook');
    });

    it('should be able to navigate from My Songs view to Home view', () => {
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=home-nav]').click();
      cy.url().should('eq', 'http://localhost:3000/');
    });
    
    
    it('should be able to navigate from Song Book view to Home view', () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=home-nav]').click();
      cy.url().should('eq', 'http://localhost:3000/');
    });

    it('should be able to navigate from My Songs view to Song Book view', () => {
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=song-book-nav]').click();
      cy.url().should('eq', 'http://localhost:3000/songbook');
    });

    it('should be able to navigate from Song Book view to My Songs view', () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=my-songs-nav]').click();
      cy.url().should('eq', 'http://localhost:3000/mysongs');
    });
  });

  describe('My Songs', () => {
    beforeEach(() => {
      cy.get('[data-cy=my-songs-nav]').click();
     });

    it('should display My Song page components', () => {
      cy.get('[data-cy=home-nav]').should('exist');
      cy.get('[data-cy=my-songs-nav]').contains('My Songs');
      cy.get('[data-cy=song-book-nav]').contains('Song Book');
    });

    it(`should display list of user's songs`, () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=song-card-btn]').first().click();
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=song-card]').should("contain", "Jigsaw falling into place")
        .and('contain', 'Radiohead')
        .and('contain','Electronica')
        .and('contain','Rock');
      cy.get('[data-cy=album-img]').should('exist');
      cy.get('[data-cy=song-card-btn]').should('exist');
      cy.get('[data-cy=microphone-icon]').should('exist');
    });

    it('should remove a song from a user\'s list', () => {
      cy.get('[data-cy=song-book-nav]').click();
      cy.get('[data-cy=song-card-btn]').eq(1).click();
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=song-card]').should('contain', 'My Boo')
        .and('contain', 'Usher')
        .and('contain','Hip Hop')
        .and('contain','R&B');
      cy.get('[data-cy=song-card-btn]').click();
      cy.get('[data-cy=song-card]').should('not.exist');
    });
  });

  describe('Song Book', () => {

    beforeEach(() => {
      cy.get('[data-cy=song-book-nav]').click();
      });

    it('should display Song Book page components', () => {
      cy.get('[data-cy=home-nav]').should('exist');
      cy.get('[data-cy=my-songs-nav]').contains('My Songs');
      cy.get('[data-cy=song-book-nav]').contains('Song Book');
      cy.get('[data-cy=search-form]').should('exist');
      cy.get('[data-cy=song-card]').should("have.length", 2);
      cy.get('[data-cy=song-card]').eq(0).contains('Radiohead');
      cy.get('[data-cy=song-card]').eq(1).contains('Usher');
      cy.get('[data-cy=song-card]').first().should('contain', 'Jigsaw falling into place')
      .and('contain', 'Radiohead')
      .and('contain','Electronica')
      .and('contain','Rock');
      cy.get('[data-cy=album-img]').first().should('exist');
      cy.get('[data-cy=song-card-btn]').first().should('exist');
      cy.get('[data-cy=microphone-icon]').should('exist');
      });

    it('should allow user to make a search', () => {
      cy.get('[data-cy=search-bar]').type('usher');
      cy.get('[data-cy=search-btn').click()
      cy.get('[data-cy=search-msg]').contains("Showing results for 'usher':");
      cy.get('[data-cy=song-card]').should('have.length', 1)
        .and('contain', 'Usher');
    });

    it('should display a helpful message if search yields no results', () => {
      cy.get('[data-cy=search-bar]').type('frank sinatra');
      cy.get('[data-cy=search-btn').click();
      cy.get('[data-cy=search-msg]').contains('No results for this search. Time to freestyle! (Or try another search 😉)');
    });  

    it('should allow a user to add a song to their library', () => {
      cy.get('[data-cy=song-card-btn]').first().click();
      cy.get('[data-cy=my-songs-nav]').click();
      cy.get('[data-cy=song-card]').should('contain', 'Jigsaw falling into place')
          .and('contain', 'Radiohead')
          .and('contain','Electronica')
          .and('contain','Rock');
    });

    it('should not allow user to add duplicate songs to user library', () => {
      cy.get('[data-cy=song-card-btn]').first().click();
      cy.get('[data-cy=song-card-btn]').first().should('be.disabled');
      cy.get('[data-cy=heart-icon]').should('exist');
    });
  });

  describe('Lyrics card', () => {
    beforeEach(() => {
      cy.intercept( '/genres', {fixture:'genre_data.json'});
      cy.intercept('/songs', {fixture:'song_data.json'});
      cy.visit('http://localhost:3000');
      cy.get('[data-cy=song-book-nav]').click();
    });

    it('should display a lyric card for all views', () => {
    cy.get('[data-cy=microphone-icon]').first().click();
    cy.get('[data-cy=lyric-content]').contains('Just as you take my hand');
    cy.get('[data-cy=lyric-close-icon]').click();
    cy.get('[data-cy=song-card-btn]').first().click();
    cy.get('[data-cy=my-songs-nav]').click();
    cy.get('[data-cy=microphone-icon]').click();
    cy.get('[data-cy=lyric-content]').contains('Just as you take my hand');

    });
  });
});

// describe('Server error message', () => {
  
//   it.only('Should display a message to the user if there and issue with the server', () =>{
//     cy.intercept({
//       method: 'GET', 
//       url:'/songs'
//     },
//     {
//       statusCode: 500,
//     })
//     cy.visit('http://localhost:3000');
//     cy.get('[data-cy=song-book-nav]').click();

//   });
// });



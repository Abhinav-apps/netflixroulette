describe('Movielist', function() {
    it('e2e test for search functionality, sorting and switching genres, selecting a movie and returning back to search ', function() {
      cy.viewport(1000, 660);
  
      cy.visit('http://localhost:3000/');
  
      // Search for 'black'
      cy.get('.search-form .form-input').click().type('black');
      cy.get('.search-form .form-button').click();
  
      // Sort by title
      cy.get('.sort-and-genre-container #sortSelect').select('title');
  
      // Change to release_date
      cy.get('.sort-and-genre-container #sortSelect').select('release_date');
  
      // Select a genre
      cy.get('.sort-and-genre-container .genre-container .genre-button:nth-child(3)').click();
  
      // Click on the first movie
      cy.get('.movieslist .movie-card').first().find('.filcard-image').click();
  
      // Close the modal
      cy.get('.modal .modal-content .close').click();
  
      // Click the search button again
      cy.get('.search-form .form-button').click();
    });
  });
  
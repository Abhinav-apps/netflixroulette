describe('Movie List Page Tests', function () {
    beforeEach(() => {
      cy.visit('http://localhost:3000/?genre=All&sortBy=release_date&offset=0');
    });
  
    it('Filters movies by genre', function () {
      cy.get('.sort-and-genre-container .genre-button:nth-child(2)').click(); // Select second genre
    });
  
    it('Sorts movies by different criteria', function () {
      cy.get('.sort-and-genre-container #sortSelect').select('title'); // Sort by title
    });
  
    it('Searches for movies by title', function () {
      cy.get('.search-form .form-input').type('ready'); // Type 'ready' in the search bar
      cy.get('.search-form .form-button').click(); // Click on the search button
    });
  
  });
  
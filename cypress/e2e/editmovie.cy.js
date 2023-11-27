describe('test_name', function () {
    it('what_it_does', function () {
      cy.viewport(1280, 593);
  
      cy.visit('http://localhost:3000/?sortBy=releaseDate&offset=0');
  
      cy.get('.movieslist > #337167 > .movie-card > .dots-overlay > .fa').click();
  
      cy.get('.movieslist > #337167 > .movie-card > .edit-menu > .edit-option:nth-child(1)').click();
  
      cy.get('.dialog-body > .MovieForm_form__w3r1h > .MovieForm_row__GljKt:nth-child(1) > .MovieForm_col__TzvOr:nth-child(1) > input')
        .click()
        .type('Fifty Shades Freed-2');
  
      cy.get('.dialog-body > .MovieForm_form__w3r1h > .MovieForm_row__GljKt:nth-child(2) > .MovieForm_col__TzvOr:nth-child(2) > input')
        .click()
        .type('117');
  
      cy.get('.dialog-body > .MovieForm_form__w3r1h > .MovieForm_row__GljKt > .MovieForm_col__TzvOr > select').select('Action');
  
      cy.get('.dialog-body > .MovieForm_form__w3r1h > .MovieForm_row__GljKt > .MovieForm_col__TzvOr > select').select('Horror');
  
      cy.get('.dialog-body > .MovieForm_form__w3r1h > .MovieForm_row__GljKt > .MovieForm_col__TzvOr > select').select('Horror');
  
      cy.get('.dialog-body > .MovieForm_form__w3r1h > .MovieForm_row__GljKt > .MovieForm_col__TzvOr > select').select('Action');
  
      cy.get('.dialog-body > .MovieForm_form__w3r1h > .MovieForm_row__GljKt > .MovieForm_col__TzvOr > select').select('Crime');
  
      cy.get('.dialog-overlay > .dialog > .dialog-body > .MovieForm_form__w3r1h > button').click();
  
      cy.get('div > .dialog-overlay > .dialog > .dialog-header > .close-button').click();
  
      cy.visit('http://localhost:3000/?sortBy=releaseDate&offset=0');
  
      cy.get('body > #root > .div-container > .search-form > .form-input').click();
  
      cy.get('body > #root > .div-container > .search-form > .form-input').type('fifty');
  
      cy.get('body > #root > .div-container > .search-form > .form-button').click();
  
      cy.get('.movieslist > #337167 > .movie-card > div > .filcard-image').click();
  
      cy.get('.movie-card > div > .modal > .modal-content > .close').click();
    });
  });
  
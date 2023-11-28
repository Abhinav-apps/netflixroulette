describe('test_name', function() {
    it('what_it_does', function() {
      cy.viewport(1280, 593);
  
      cy.visit('http://localhost:3000/?sortBy=releaseDate&offset=8');
  
      cy.get('.add-movie-button').click();
  
      cy.get('.MovieForm_form__w3r1h > .MovieForm_row__GljKt:nth-child(1) > .MovieForm_col__TzvOr:nth-child(1) > input')
        .click()
        .type('Pacific Rim: Uprising 2');
  
      cy.get('.MovieForm_form__w3r1h > .MovieForm_row__GljKt:nth-child(2) > .MovieForm_col__TzvOr:nth-child(1) > input')
        .click()
        .type('Rise Up');
  
      cy.get('.MovieForm_form__w3r1h > .MovieForm_row__GljKt:nth-child(1) > .MovieForm_col__TzvOr:nth-child(2) > input')
        .click()
        .type('2023-12-10');
  
      cy.get('.MovieForm_form__w3r1h > .MovieForm_row__GljKt:nth-child(2) > .MovieForm_col__TzvOr:nth-child(2) > input')
        .click()
        .type('120');
  
      cy.get('.MovieForm_form__w3r1h > .MovieForm_row__GljKt:nth-child(3) > .MovieForm_col__TzvOr > input')
        .click()
        .type('https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg');
  
      cy.get('.MovieForm_form__w3r1h > .MovieForm_row__GljKt > .MovieForm_col__TzvOr > select').select('Action');
  
      cy.get('.MovieForm_form__w3r1h > .MovieForm_row__GljKt > .MovieForm_col__TzvOr > textarea')
      .click()
      .type('Pacific Rim: Uprising 2');
  
      cy.get('.dialog-overlay > .dialog > .dialog-body > .MovieForm_form__w3r1h > button').click();
  
      cy.get('div > .dialog-overlay > .dialog > .dialog-header > .close-button').click();
  
      cy.get('#root > .div-container > .modal > .modal-content > .close').click();
    });
  });
  
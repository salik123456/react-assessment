describe('ArticleContainer', () => {
  const apiUrlPattern = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=*'; // Match full endpoint

  it('shows loading state initially', () => {
    cy.intercept('GET', apiUrlPattern, (req) => {
      req.on('response', (res) => {
        res.setDelay(1000); 
      });
      req.reply({ fixture: 'articles.json' }); 
    }).as('fetchArticles');

    cy.visit('/');

   
    cy.contains(/loading/i, { timeout: 10000 }).should('be.visible');
  });

  it('shows error message on error', () => {
    cy.intercept('GET', apiUrlPattern, {
      statusCode: 500, 
      body: {},
    }).as('fetchArticlesFailed');

    cy.visit('/');

   
    cy.wait('@fetchArticlesFailed');

   
    cy.contains(/error loading articles/i, { timeout: 10000 }).should('be.visible');
  });

  it('renders article list on success', () => {
    cy.intercept('GET', apiUrlPattern, { fixture: 'articles.json' }).as('fetchArticles');

    cy.visit('/');

    cy.wait('@fetchArticles');

  
    cy.contains('Sample Article', { timeout: 10000 }).should('be.visible');
  });

  it('shows article details when an article is selected', () => {
    cy.intercept('GET', apiUrlPattern, { fixture: 'articles.json' }).as('fetchArticles');

    cy.visit('/');

   
    cy.wait('@fetchArticles');

   
    cy.contains('Sample Article').should('be.visible').click();


    cy.contains('Sample Article Detail', { timeout: 10000 }).should('be.visible');
  });
});

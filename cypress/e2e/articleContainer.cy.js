describe('ArticleContainer', () => {
    it('shows loading state initially', () => {
      cy.intercept('GET', '/api/articles', (req) => {
        req.on('response', (res) => {
          res.setDelay(1000);
        });
        req.reply({ fixture: 'articles.json' });
      }).as('fetchArticles');
  
      cy.visit('/');
  
      cy.contains('Loading...'); 
    });
  
    it('shows error message on error', () => {
      cy.intercept('GET', '/api/articles', {
        statusCode: 500,
        body: {},
      }).as('fetchArticlesFailed');
  
      cy.visit('/');
  
      cy.contains('Error loading articles.');
    });
  
    it('renders article list on success', () => {
      cy.intercept('GET', '/api/articles', { fixture: 'articles.json' }).as('fetchArticles');
  
      cy.visit('/');
  
      cy.contains('Sample Article');
    });
  
    it('should show article details when an article is selected', () => {
      cy.intercept('GET', '/api/articles', { fixture: 'articles.json' }).as('fetchArticles');
  
      cy.visit('/');
  
      cy.contains('Sample Article').should('be.visible').click();

  
      cy.contains('Sample Article Detail'); 
    });
  });
  
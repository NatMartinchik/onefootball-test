declare namespace Cypress {
    interface Chainable {
      /**
       * Navigates to the home page of web application
       */
      visitHomepage(): Chainable<Element>
  
      /**
       * Navigates to the feedback page of web application
       */
      visitFeedbackpage(): Chainable<Element>

      /**
       * Navigates to the company page of web application
       */
      visitCompanypage(): Chainable<Element>
  
    }
  }
  
  Cypress.Commands.add('visitHomepage', () => {
    cy.visit('https://onefootball.com/en/home')
  })
  
  Cypress.Commands.add('visitFeedbackpage', () => {
    cy.visit('https://company.onefootball.com/contact/')
  })
  
  Cypress.Commands.add('visitCompanypage', () => {
    cy.visit('https://company.onefootball.com/')
  })

  

declare namespace Cypress {
    interface Chainable {

  
      /**
       *
       * @param full_name - takes name of the message author
       * @param email - takes email 
       * @param summary - takes subjects of the message
       * @param message - the messages of the author
       * @param company - the author's company
       */
      submitFeedback(
        summary: string,
        message: string,
        full_name: string,
        company: string,
        email: string
      ): Chainable<Element>
    }
  }
  
 
  
  Cypress.Commands.add('submitFeedback', (summary, message, full_name, company, email) => {
    cy.get('[name="Brand"] > :nth-child(3) > input').focus().type(summary)
    cy.get('[name="Brand"] > :nth-child(4) > textarea').type(message)
    cy.get('[name="Brand"] > :nth-child(5) > input').type(full_name)
    cy.get('[name="Brand"] > :nth-child(6) > input').type(company)
    cy.get('[name="Brand"] > :nth-child(7) > input').type(email)

  })
  
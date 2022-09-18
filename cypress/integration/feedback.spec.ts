/// <reference types="cypress" />
describe('Feedback Form Test', () => {
    it('Should open feedback form', () => {
      cy.visitFeedbackpage()
      cy.get('#didomi-notice-agree-button').click()
    })  

    it('Should fill in feedback form', () => {  
      cy.fixture('feedbackData').then(({ summary, message, full_name, company, email }) => {
        cy.submitFeedback(summary, message, full_name, company, email)
      ///cy.get('[name="Brand"] > .ctas > .cta > button').click()

      cy.get('[name="Brand"] > :nth-child(3) > input').should('have.value', summary)
      cy.get('[name="Brand"] > :nth-child(4) > textarea').should('have.value', message)
      cy.get('[name="Brand"] > :nth-child(5) > input').should('have.value', full_name)
      cy.get('[name="Brand"] > :nth-child(6) > input').should('have.value', company)
      cy.get('[name="Brand"] > :nth-child(7) > input').should('have.value', email)
      })
    })
  })

/// <reference types="cypress" />
describe('Team Visibility Test', () => {
    it('Should open company page', () => {
      cy.visitCompanypage()
      cy.get('#didomi-notice-agree-button').click()
    })    

    it('Should check if CEO is visible', () => {
        cy.get('.team > :nth-child(1) > img').should('be.visible')
        cy.get(':nth-child(1) > .h3').should('be.visible').should('include.text', ' Lucas von Cranach')
        cy.get('.team > :nth-child(1) > :nth-child(3)').should('be.visible').should('include.text', 'CEO')
    })  
    
    it('Should check if CFO is visible', () => {
        cy.get('.team > :nth-child(2) > img').should('be.visible')
        cy.get(':nth-child(2) > .h3').should('be.visible').should('include.text', 'Jörg Meiner')
        cy.get('.team > :nth-child(2) > :nth-child(3)').should('be.visible').should('include.text', 'CFO')
    })  

    it('Should check if COO is visible', () => {
        cy.get('.team > :nth-child(3) > img').should('be.visible')
        cy.get(':nth-child(3) > .h3').should('be.visible').should('include.text', 'Franz Koch')
        cy.get('.team > :nth-child(3) > :nth-child(3)').should('be.visible').should('include.text', 'COO')
    })
    
  })

 
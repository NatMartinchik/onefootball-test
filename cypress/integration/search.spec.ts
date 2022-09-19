/// <reference types="cypress" />
describe('Search Test', () => {
    it('Should open home page', () => {
      cy.visitHomepage()
    })

    it('Should open search input', () => {
      cy.get('of-search-icon[class="page-header-v2__link-icon"]').click() 
      cy.url().should('include', 'en/search')
    })

    it('Should fill search input', () => {
      cy.get('input[enterkeyhint="search"]').click()
      cy.get('input[enterkeyhint="search"]')
        .type('Chelsea')
      cy.get(".search-result-list__item").should('include.text','Chelsea')  
    })

})



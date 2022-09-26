import specTitle from 'cypress-sonarqube-reporter/specTitle';

describe(specTitle('MFE'), () => {
    it('Renders something', () => {
        cy.visit('/u/14/not-found');
        cy.get('#root').children().its('length').should('be.gte', 1);
    });
});

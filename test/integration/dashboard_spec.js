describe('Dashboard', function() {
    it('shows the number of open issues', function(){
        cy.fixture({
            title: "Issue 1",
            status:"new"
        });
        cy.fixture({
            title: "Issue 2",
            status:"open"
        });
        cy.fixture({
            title: "Issue 3",
            status:"close"
        });
        cy.visit('/dashboad');
        cy.contains('2').should('exist');
    });
});

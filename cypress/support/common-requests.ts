beforeEach(() => {
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
    cy.intercept('GET', '/api/v1/users/me*', { body: {} });
    cy.intercept('GET', /.*zopim.*/, []);
    cy.intercept('GET', /pendo.js/, []);
    cy.intercept('GET', '/api/v1/tracking-identity*', { body: {} });

    cy.intercept('GET', '/api/v1/feature-flags/**/features', {
        fixture: 'features.json'
    }).as('features');

    cy.intercept('GET', '/api/v2/notificationCenterService/notifications*', {
        fixture: 'notifications.json'
    }).as('notifications');

    cy.intercept('GET', '/api/v1/context*', {
        fixture: 'context.json'
    }).as('context');

    cy.intercept('GET', '/api/user-view-features', {
        fixture: 'user-view-features.json'
    }).as('user-view-features');

    cy.intercept('GET', '/api/notificationCenterService/notifications/count*', { body: 1 }).as('notificationsCount');
});

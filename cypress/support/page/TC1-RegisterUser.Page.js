class form {
    constructor() {
        this.loginLink = () => cy.get('[href="/login"]');
        this.newUserValidationMessage = () => cy.get('[class="signup-form"] > h2');
        this.nameInput = () => cy.get('[data-qa="signup-name"]');
        this.emailInput = () => cy.get('[data-qa="signup-email"]');
        this.signupButton = () => cy.get('[data-qa="signup-button"]');
        this.validateTitle = () => cy.get('.title');
        this.selectGender = () => cy.get('#id_gender1');
        this.typePassword = () => cy.get('#password');
        this.selectDays = () => cy.get('#days');
        this.selectMonths = () => cy.get('#months');
        this.selectYears = () => cy.get('#years');
        this.selectNewsletter = () => cy.get('#newsletter');
        this.selectOptin = () => cy.get('#optin');
        this.firstNameInput = () => cy.get('#first_name');
        this.lastNameInput = () => cy.get('#last_name');
        this.companyInput = () => cy.get('#company');
        this.addresOneInput = () => cy.get('#address1');
        this.addresTwoInput = () => cy.get('#address2');
        this.countryInput = () =>  cy.get('#country');
        this.stateInput = () => cy.get('#state');
        this.cityInput = () => cy.get('#city');
        this.zipcodeInput = () => cy.get('#zipcode');
        this.mobileInput = () => cy.get('#mobile_number');
        this.buttonCreatedAccount = () => cy.get('button[type="submit"]').eq(0);
        this.validateCreatedAccount = () => cy.get('h2[data-qa="account-created"]');
        this.clickContinue = () => cy.get('[data-qa="continue-button"]')
        this.validateName = () => cy.get(':nth-child(10) > a');
        this.deleteLink = () => cy.get('a[href="/delete_account"]');
        this.validateAccountDeleted = () => cy.get('h2[data-qa="account-deleted"]');
        this.buttonContinue = () => cy.get('[data-qa="continue-button"]');
    }
}

export const formPage = new form
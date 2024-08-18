import { formPage } from "../../support/page/TC1-RegisterUser.Page";

describe('template spec', () => {

beforeEach(() => {
  cy.visit('/')
  cy.url().should('contain', 'exercise')
  
});
it('Test Case 1: Register User', () => {
  

  
  formPage.loginLink().click()
  formPage.newUserValidationMessage().should('be.visible').and('have.text', 'New User Signup!')
  formPage.nameInput().type('Alexander')
  formPage.emailInput().type('waa.al3x@gmail.com')
  formPage.signupButton().click()
  formPage.validateTitle().should('be.visible').eq(0).and('have.text', 'Enter Account Information')
  formPage.selectGender().click()
  formPage.typePassword().type('123456')
  formPage.selectDays().select(10)
  formPage.selectMonths().select(2)
  formPage.selectYears().select('1988')
  formPage.selectNewsletter().click()
  formPage.selectOptin().click()
  formPage.firstNameInput().type('alexander')
  formPage.lastNameInput().type('windecker')
  formPage.companyInput().type('upex')
  formPage.addresOneInput().type('Argentina')
  formPage.addresTwoInput().type('Buenos Aires')
  formPage.countryInput().select(1)
  formPage.stateInput().type('Argentina')
  formPage.cityInput().type('Buenos Aires')
  formPage.zipcodeInput().type('172658')
  formPage.mobileInput().type('156984996')
  formPage.buttonCreatedAccount().click()
  formPage.validateCreatedAccount().should('be.visible').and('have.text', 'Account Created!')
  formPage.clickContinue().click()
  formPage.validateName().should('have.text', ' Logged in as Alexander')
  formPage.deleteLink().click()
  formPage.validateAccountDeleted().should('be.visible').and('have.text', 'Account Deleted!')
  cy.wait(500)
  formPage.buttonContinue().click()

  
  
  
})
})
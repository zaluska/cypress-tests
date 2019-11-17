//Login elements
const loginPageTitle = 'Hotel Accomodation - login page'
const usernameTxtField = '#login'
const passwordTxtField = '#senha'
const submitButtonLogin = '#loginBtn'

//Dashboard elements
const dashboardPageTitle = 'Dashboard'
const logoutMenu = '.dropdown-toggle'
const logoutButton = '.dropdown-menu > li > a'


//Login and logout functions 
function performLogin(cy, login, password) {
    cy.get(usernameTxtField).type(login)
    cy.get(passwordTxtField).type(password)
    cy.get(submitButtonLogin).click()
}
function checkLoginPageTitle(cy) {
    cy.title().should('eq', loginPageTitle)
}

//Dashbourd functions
function checkDashboardPageTitle(cy) {
    cy.title().should('eq', dashboardPageTitle)
}
function performLogout(cy) {
    cy.get(logoutMenu).click()
    cy.get(logoutButton).click()
}

//Exports
module.exports = {
    checkDashboardPageTitle,
    checkLoginPageTitle,
    performLogin,
    performLogout,
}
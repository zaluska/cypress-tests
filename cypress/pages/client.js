//Client's elements
const buttonClient = ':nth-child(4) > .panel > a > .panel-footer > .pull-right > .fa'
const listClientPageTitle = 'List'
const buttonNewClient = '.btn-primary'

const newClientPageTitle = 'Create New Client'
const clientNameTxtField = '#name'
const clientEmailTxtField = '#email'
const socialNumberTxtField = '#socialSecurityNumber'
const genderCheckbox = '[type="radio"]'
const submitButtonSave = '.btn-primary'
const viewClientPageTitle = 'View'

//Client's functions
function accessToClient(cy) {
    cy.get(buttonClient).click()
}
function checkClientPageTitle(cy) {
    cy.title().should('eq', listClientPageTitle)
}
function createNewClient(cy) {
    cy.get(buttonNewClient).click()
}
function checkNewClientPageTitle(cy) {
    cy.title().should('eq', newClientPageTitle)
}
function performNewClient(cy, name, email, ssn, gender) {
    cy.get(clientNameTxtField).type(name)
    cy.get(clientEmailTxtField).type(email)
    cy.get(socialNumberTxtField).type(ssn)
    cy.get(genderCheckbox).check(gender)
    cy.get(submitButtonSave).click()
}
function checkViewClientPageTitle(cy) {
    cy.title().should('eq', viewClientPageTitle)
}

//Exports
module.exports = {
    accessToClient,
    checkClientPageTitle,
    createNewClient,
    checkNewClientPageTitle,
    performNewClient,
    checkViewClientPageTitle
}
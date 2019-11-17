//Bill's elements
const buttonBill = ':nth-child(4) > a'
const listBillPageTitle = 'List'
const buttonNewBill = '.btn-primary'

const createNewBillPageTitle = 'Create New Bill'
const billStatusField = '#billStatusId'
const reservationCodeField = '#hotelReservationId'
const submitButtonSave = '.btn-primary'
const viewNewBillPageTitle = 'View'

//Bill's function
function accessToBill(cy) {
    cy.get(buttonBill).click()
}
function checkBillPageTitle(cy) {
    cy.title().should('eq', listBillPageTitle)
}
function createBill(cy) {
    cy.get(buttonNewBill).click()
}
function checkNewBillPageTitle(cy) {
    cy.title().should('eq', createNewBillPageTitle)
}
function performCreateBill(cy, status, code) {
    cy.get(billStatusField).select(status)
    // Selecting first available option
    cy.get(reservationCodeField + ' option').eq(1).invoke('val').then((val)=>{
        cy.get(reservationCodeField).select(val)
      })
    cy.get(submitButtonSave).click()
}
function checkCreatedBillPageTitle
    (cy) {
    cy.title().should('eq', viewNewBillPageTitle)
}

//Exports
module.exports = {
    accessToBill,
    checkBillPageTitle,
    createBill,
    checkNewBillPageTitle,
    performCreateBill,
    checkCreatedBillPageTitle
}
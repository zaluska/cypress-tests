//Reservation's elements
const buttonReservation = ':nth-child(6) > a'
const listReservationPageTitle = 'List'
const buttonEditReservation = ':nth-child(1) > :nth-child(8) > a:nth-child(2)'

const editReservationPageTitle = 'Edit Hotel Reservation'
const bedrumNumberField = '#bedroomId'
const clientNameField = '#clientId'
const statusReservationField = '#reservationStatusId'
const submitButtonSave = '.btn-primary'
const viewUpdatedReservationPageTitle = 'View'

//Reservation's function
function accessToReservation(cy) {
    cy.get(buttonReservation).click()
}
function checkReservationPageTitle(cy) {
    cy.title().should('eq', listReservationPageTitle)
}
function editReservation(cy) {
    cy.get(buttonEditReservation).click()
}
function checkEditReservationPageTitle(cy) {
    cy.title().should('eq', editReservationPageTitle)
}
function performEditReservation(cy, name, status) {
    // Selecting first available bedroom
    cy.get(bedrumNumberField + ' option').eq(1).invoke('val').then((val)=>{
        cy.get(bedrumNumberField).select(val)
      })
    cy.get(clientNameField).select(name)
    cy.get(statusReservationField).select(status)
    cy.get(submitButtonSave).click()
}
function checkUpdatedReservationPageTitle(cy) {
    cy.title().should('eq', viewUpdatedReservationPageTitle)
}
//Exports
module.exports = {
    accessToReservation,
    checkReservationPageTitle,
    editReservation,
    checkEditReservationPageTitle,
    performEditReservation,
    checkUpdatedReservationPageTitle
}

import * as utils from '../pages/utils'
import * as client from '../pages/client'
import * as reservation from '../pages/reservation'
import * as bill from '../pages/bill'

//First test case
describe('Login/logout test case', function () {
  beforeEach(() => {
    cy.visit('http://localhost:8080/hotel/faces/login/login.xhtml')
    utils.checkLoginPageTitle(cy)
  })


  it('Perform login with correct credentials and logout', function () {
    utils.checkLoginPageTitle(cy)
    utils.performLogin(cy, 'jp', '1010')
    utils.performLogout(cy)

  })
})

//Second test case
describe('Login with wrong pass test case', function () {
  beforeEach(() => {
    cy.visit('http://localhost:8080/hotel/faces/login/login.xhtml')

  })

  it('Perform login with wrong credentials', function () {
    utils.checkLoginPageTitle(cy)
    utils.performLogin(cy, 'jp', '1111')

    //I am asserting the error message presents
    cy.get('.ui-growl-title').contains('Login and Password Wrong')
  })
})

//Thierd test case
describe('Create new client', function () {
  beforeEach(() => {
    cy.visit('http://localhost:8080/hotel/faces/login/login.xhtml')

  })

  it('Create new client', function () {
    utils.checkLoginPageTitle(cy)
    utils.performLogin(cy, 'jp', '1010')
    client.accessToClient(cy)
    client.checkClientPageTitle(cy)
    client.createNewClient(cy)
    client.checkNewClientPageTitle(cy)
    var ssn = Math.floor(Math.random() * 1000000000000)
    var email = ssn + '@gmail.com'
    client.performNewClient(cy, 'Alex', email, ssn, 'M')
    client.checkViewClientPageTitle(cy)

    //I am asserting the View page contains client's email and ssn
    cy.get(':nth-child(4) > :nth-child(2) > span').contains(email)
    cy.get(':nth-child(6) > :nth-child(2) > span').contains(ssn)
  })
})

//Fourth test case
describe('Edit reservation', function () {
  beforeEach(() => {
    cy.visit('http://localhost:8080/hotel/faces/login/login.xhtml')

  })
  it('Edit existed reservation', function () {
    utils.checkLoginPageTitle(cy)
    utils.performLogin(cy, 'jp', '1010')
    reservation.accessToReservation(cy)
    reservation.checkReservationPageTitle(cy)
    reservation.editReservation(cy)
    reservation.checkEditReservationPageTitle(cy)
    reservation.performEditReservation(cy, 'Yuri', 'CONFIRMED')

    //I am asserting the View page contains updated reservation information
    reservation.checkUpdatedReservationPageTitle(cy)
  })
})

//Fifth test case
describe('Create bill', function () {
  beforeEach(() => {
    cy.visit('http://localhost:8080/hotel/faces/login/login.xhtml')

  })
  it('Create new bill', function () {
    utils.checkLoginPageTitle(cy)
    utils.performLogin(cy, 'jp', '1010')
    bill.accessToBill(cy)
    bill.checkBillPageTitle(cy)
    bill.createBill(cy)
    bill.checkNewBillPageTitle(cy)
    bill.performCreateBill(cy, 'OPEN')

    //I am asserting the View page contains new bill
    bill.checkCreatedBillPageTitle(cy)

  })
})
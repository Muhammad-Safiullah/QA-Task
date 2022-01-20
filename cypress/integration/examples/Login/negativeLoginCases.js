import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

var filePath = 'cypress/utils/config.json'

When ('user hits a {string} request method for route {string} and set {string} Invalid value for email and {string} valid value for password in the request API body and expected response Status Code should be {int} with error message {string} in response body', (httpMethod,route,email,password,expectedStatusCode,responseErrorMessage) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL,
        body: {
            email: email,
            password: password
        },
        failOnStatusCode: false 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body).to.deep.equal({
                "error": responseErrorMessage
            })
        })    
    })
})

When ('user hits a {string} request method for route {string} and set {string} valid value for email and {string} Invalid value for password in the request API body and expected response Status Code should be {int} with error message {string} in response body', (httpMethod,route,email,password,expectedStatusCode,responseErrorMessage) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL,
        body: {
            email: email,
            password: password
        },
        failOnStatusCode: false 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body).to.deep.equal({
                "error": responseErrorMessage
            })
        })    
    })
})


When ('user hits a {string} request method for route {string} and set {string} Invalid value for email and {string} Invalid value for password in the request API body and expected response Status Code should be {int} with error message {string} in response body', (httpMethod,route,email,password,expectedStatusCode,responseErrorMessage) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL,
        body: {
            email: email,
            password: password
        },
        failOnStatusCode: false 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body).to.deep.equal({
                "error": responseErrorMessage
            })
        })    
    })
})
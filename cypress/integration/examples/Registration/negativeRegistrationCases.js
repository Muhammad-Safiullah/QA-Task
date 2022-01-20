import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

var filePath = 'cypress/utils/config.json'

When ('user hits a {string} request method for route {string} with empty body and expected response Status Code should be {int} and response error should be {string}', (httpMethod,route,expectedStatusCode,responseErrorMessage) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL,
        failOnStatusCode: false 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body).to.deep.equal({
                "error": responseErrorMessage
            })
        })    
    })
})

When ('user hits a {string} request method for route {string} and set {string} value for email and expected response Status Code should be {int} and response error should be {string}', (httpMethod,route,email,expectedStatusCode,responseErrorMessage) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL,
        body: {
            email: email
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

When ('user hits a {string} request method for route {string} and set {string} value for password and expected response Status Code should be {int} and response error should be {string}', (httpMethod,route,password,expectedStatusCode,responseErrorMessage) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL,
        body: {
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

When ('user hits a {string} request method for route {string} and set {string} value for email and {string} value for password in the request API body and expected response Status Code should be {int} and response error should be {string}', (httpMethod,route,email,password,expectedStatusCode,responseErrorMessage) => {
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
            expect(response.body.error).to.equal(
                responseErrorMessage
            )
        })    
    })
})

When ('user hits a {string} request method for route {string} and register with this {string} email twice should get a response Status Code should be {int} and response error message should be {string}', (httpMethod,route,email,expectedStatusCode,responseErrorMessage) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
            method: httpMethod,
            url: completeURL,
            body: {
                email: email,
                password: "hello"
            },
            failOnStatusCode: false 
        }),
        cy.request({
        method: httpMethod,
        url: completeURL,
        body: {
            email: email,
            password: "password"
        },
        failOnStatusCode: false 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.error).to.equal(
                responseErrorMessage
            )
        })    
    })
})
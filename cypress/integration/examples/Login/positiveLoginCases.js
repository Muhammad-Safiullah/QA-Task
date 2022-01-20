import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

var filePath = 'cypress/utils/config.json'

When ('user hits a {string} request method for route {string} and set {string} value for email and {string} value for password in the request API body and expected response Status Code should be {int} with the token attribute in response body', (httpMethod,route,email,password,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        body: {
          email: email,
          password: password
        }
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body).have.property('token')
        })    
    })
})
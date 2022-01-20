import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

var filePath = 'cypress/utils/config.json'
// DELETE USER

When ('user hits a {string} request method for route {string} for userId {string} and expected response Status Code should be {int} also response body should be empty', (httpMethod,route,userId,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route).concat('/').concat(userId)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body).to.be.empty
        })    
    })
})
import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

var filePath = 'cypress/utils/config.json'

// CREATE USER

When ('user hits a {string} request method for route {string} and set {string} value for name and {string} value for job in the request API body and expected response Status Code should be {int}', (httpMethod,route,userName,userJob,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        body: {
          name: userName,
          job: userJob
        }
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.name).to.equal(userName)
            expect({ job: userJob }).to.eql({ job: userJob })
            expect(response.body).have.property('id')
            expect(response.body).have.property('createdAt')
            expect(response.body).to.have.all.keys('name', 'job', 'id', 'createdAt')
        })    
    })
})


When ('user hits a {string} request method for route {string} and set {string} value for name in the request API body and expected response Status Code should be {int} and job attribute should not be present in API response', (httpMethod,route,userName,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        body: {
          name: userName,
        }
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.name).to.equal(userName)
            expect(response.body.job).to.be.undefined
            expect(response.body).have.property('id')
            expect(response.body).have.property('createdAt')
            expect(response.body).to.have.all.keys('name', 'id', 'createdAt')
        })    
    })
})

When ('user hits a {string} request method for route {string} and set {string} value for Job in the request API body and expected response Status Code should be {int} and name attribute should not be present in API response', (httpMethod,route,userJob,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        body: {
          job: userJob,
        }
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.job).to.equal(userJob)
            expect(response.body.name).to.be.undefined
            expect(response.body).have.property('id')
            expect(response.body).have.property('createdAt')
            expect(response.body).to.have.all.keys('job', 'id', 'createdAt')
        })    
    })
})

When ('user hits a {string} request method for route {string} without request body then expected response status Code should be {int} with only id and createdAt attribute should be present in API response', (httpMethod,route,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.name).to.be.undefined
            expect(response.body.job).to.be.undefined
            expect(response.body).have.property('id')
            expect(response.body).have.property('createdAt')
            expect(response.body).to.have.all.keys('id', 'createdAt')
        })    
    })
})

// UPDATE USER

When ('user hits a {string} request method for route {string} and set {string} value for name and {string} value for job in the request API body for userId {string} and expected response Status Code should be {int}', (httpMethod,route,userName,userJob,userId,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route).concat('/').concat(userId)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        body: {
          name: userName,
          job: userJob
        }
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.name).to.equal(userName)
            expect({ job: userJob }).to.eql({ job: userJob })
            expect(response.body).have.property('updatedAt')
            expect(response.body).to.have.all.keys('name', 'job', 'updatedAt')
        })    
    })
})

When ('user hits a {string} request method for route {string} and set {string} value for name in the request API body for userId {string} and expected response Status Code should be {int} also job attribute should not be present in API response', (httpMethod,route,userName,userId,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route).concat('/').concat(userId)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        body: {
          name: userName,
        }
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.name).to.equal(userName)
            expect(response.body.job).to.be.undefined
            expect(response.body).have.property('updatedAt')
            expect(response.body).to.have.all.keys('name', 'updatedAt')
        })    
    })
})

When ('user hits a {string} request method for route {string} and set {string} value for Job in the request API body for userId {string} and expected response Status Code should be {int} also name attribute should not be present in API response', (httpMethod,route,userJob,userId,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route).concat('/').concat(userId)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        body: {
          job: userJob,
        }
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.job).to.equal(userJob)
            expect(response.body.name).to.be.undefined
            expect(response.body).have.property('updatedAt')
            expect(response.body).to.have.all.keys('job', 'updatedAt')
        })    
    })
})

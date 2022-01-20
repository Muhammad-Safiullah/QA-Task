import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

var filePath = 'cypress/utils/config.json'

When ('user hits a {string} request method for route {string} and page# {int} should have total {int} records per page and expected response Status Code should be {int}', (httpMethod,route,page,recordsPerPage,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route).concat('?page=').concat(page)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        }).then(function(response){

            var totalRecord = response.body.total
            var expectedTotalNoOfPages = totalRecord/recordsPerPage
            expectedTotalNoOfPages = Math.ceil(expectedTotalNoOfPages)
            cy.log(totalRecord)
            cy.log(expectedTotalNoOfPages)
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body.page).to.equal(page)
            expect(response.body.per_page).to.equal(recordsPerPage)
            expect(response.body).have.property('total')
            expect(response.body).have.property('total_pages')
            expect(response.body).have.property('data')
            expect(response.body.data).to.be.a('array')
            let obj = response.body.data[0]
            expect(obj).to.have.keys('id','email','first_name','last_name','avatar')
            expect(response.body).have.property('support')
            expect(response.body.support).to.deep.equal({
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            })

            expect(response.body).to.have.all.keys('page','per_page','total', 'total_pages', 'data', 'support')
        })    
    })
})

And ('verify that the pagination is correctly working on {string} API after calculating with {int} max records per page', (route,recordsPerPage) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        var httpMethod = 'GET'
        var mainURL = obj.url
        var page
        cy.request({
            method: httpMethod,
            url: completeURL, 
        }).then(function(response){
            var totalRecord = response.body.total
            var expectedTotalNoOfPages = totalRecord/recordsPerPage
            page = Math.ceil(expectedTotalNoOfPages)
        

        var pagePlusOne = page+1
        for (let index = 1; index <= page+1; index++) {
            completeURL = mainURL.concat(route).concat('?page=').concat(index)
            switch (index) {
                
                case pagePlusOne:
                    cy.request({
                    method: httpMethod,
                    url: completeURL, 
                    }).then(function(response){
                        expect(response.status).to.eq(200)
                        expect(response.body.page).to.equal(pagePlusOne)
                        expect(response.body.per_page).to.equal(recordsPerPage)
                        expect(response.body).have.property('total')
                        expect(response.body).have.property('total_pages')
                        expect(response.body).have.property('data')
                        expect(response.body.data).to.be.a('array')
                        expect(response.body.data.equal);
                        expect(response.body).have.property('support')
                        expect(response.body.data).to.be.empty
                        expect(response.body.support).to.deep.equal({
                            "url": "https://reqres.in/#support-heading",
                            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                        })
                        expect(response.body).to.have.all.keys('page','per_page','total', 'total_pages', 'data', 'support')
                    })
                    break;
                    
                    default:
                        cy.request({
                            method: httpMethod,
                            url: completeURL, 
                            }).then(function(response){
                                expect(response.status).to.eq(200)
                                expect(response.body.page).to.equal(index)
                                expect(response.body.per_page).to.equal(recordsPerPage)
                                expect(response.body).have.property('total')
                                expect(response.body).have.property('total_pages')
                                expect(response.body).have.property('data')
                                expect(response.body.data).to.be.a('array')
                                expect(response.body.data[index]).to.have.any.keys('id','email','first_name','last_name','avatar')                            
                                expect(response.body).have.property('support')
                                expect(response.body.support).to.deep.equal({
                                    "url": "https://reqres.in/#support-heading",
                                    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                                })
                                expect(response.body).to.have.all.keys('page','per_page','total', 'total_pages', 'data', 'support')
                            })

                        break;
                }
            
            }

        })

  
    })
})


And ('verify that a {string} API route {string} for userId {int} should respond returns the data record of only that user and the expected response code should be {int}', (httpMethod,route,userId,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        var mainURL = obj.url
        completeURL = mainURL.concat(route).concat('/').concat(userId)
        cy.request({
        method: httpMethod,
        url: completeURL, 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            let obj = response.body.data;
            expect(obj).to.have.keys('id','email','first_name','last_name','avatar')
            expect(response.body).have.property('support')
            expect(response.body.support).to.deep.equal({
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            })
           
        })            
  
    })
})


Then ('verify that if the record doesnot exist for userId {int} the empty body should be the response with {int} as response code', (userId,expectedStatusCode) => {
    cy.readFile(filePath).then((obj) => {
        var httpMethod = 'GET'
        var route = '/api/users'
        var mainURL = obj.url
        var completeURL = mainURL.concat(route)
        var mainURL = obj.url
        completeURL = mainURL.concat(route).concat('/').concat(userId)
        cy.request({
        method: httpMethod,
        url: completeURL,
        failOnStatusCode: false, 
        }).then(function(response){
            expect(response.status).to.eq(expectedStatusCode)
            expect(response.body).to.be.empty           
        })            
  
    })
})
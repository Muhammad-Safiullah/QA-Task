Feature: Fetching users records
    User Records are fetched from the Records List

                                            #  List USER

    # Passed
    Scenario: Verify 'GET' request method of USERs should have correct response body with correct implementation of Pagination and also API response against User ID filter record should be correct   
    When user hits a 'GET' request method for route '/api/users' and page# 1 should have total 6 records per page and expected response Status Code should be 200
    And verify that the pagination is correctly working on '/api/user' API after calculating with 6 max records per page 
    And verify that a 'GET' API route '/api/users' for userId 1 should respond returns the data record of only that user and the expected response code should be 200
    Then verify that if the record doesnot exist for userId 23 the empty body should be the response with 404 as response code
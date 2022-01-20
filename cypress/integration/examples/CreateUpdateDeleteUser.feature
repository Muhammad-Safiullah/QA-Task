Feature: Create and Update operations of USER API's validation
    Performing CRUD operations for USER APIs and validating their responses

# Considering both the attributes are not required to hit the API

                                            #  CREATE USER

# Passed
    Scenario: Verify 'POST' request method for creating a USER should get requested body attributes with ID and createdAt attribute in response body when user provides both name and Job attribute in the request body    
    When user hits a 'POST' request method for route '/api/user' and set 'Muhammad Safi' value for name and 'Test Automation Engineer' value for job in the request API body and expected response Status Code should be 201

# Passed
    Scenario: Verify 'POST' request method for creating a USER should get only name attribute with ID and createdAt attribute in response body when user provides only name attribute in the request body    
    When user hits a 'POST' request method for route '/api/user' and set 'Muhammad Safi' value for name in the request API body and expected response Status Code should be 201 and job attribute should not be present in API response

# Passed
    Scenario: Verify 'POST' request method for creating a USER should get only Job attribute with ID and createdAt attribute in response body when user provides only Job attribute in the request body    
    When user hits a 'POST' request method for route '/api/user' and set 'Test Automation Engineer' value for Job in the request API body and expected response Status Code should be 201 and name attribute should not be present in API response

# Passed
    Scenario: Verify 'POST' request method for creating a USER should get only ID and createdAt attribute in response body when user provides request API without body    
    When user hits a 'POST' request method for route '/api/user' without request body then expected response status Code should be 201 with only id and createdAt attribute should be present in API response


                                            # UPDATE USER

# Passed
    Scenario: Verify 'PUT' request method for updating a USER should get requested body attributes along with updatedAt attribute in response body when user provides both name and Job attribute in the request body    
    When user hits a 'PUT' request method for route '/api/user' and set 'Muhammad Safi' value for name and 'Test Automation Engineer' value for job in the request API body for userId '2' and expected response Status Code should be 200


# Passed
    Scenario: Verify 'PATCH' request method for updating a USER should get only name attribute with updatedAt attribute in response body when user provides only name attribute in the request body    
    When user hits a 'PATCH' request method for route '/api/user' and set 'Muhammad Safi' value for name in the request API body for userId '2' and expected response Status Code should be 200 also job attribute should not be present in API response

# Passed
    Scenario: Verify 'PATCH' request method for updating a USER should get only Job attribute with updatedAt attribute in response body when user provides only Job attribute in the request body    
    When user hits a 'PATCH' request method for route '/api/user' and set 'Test Automation Engineer' value for Job in the request API body for userId '2' and expected response Status Code should be 200 also name attribute should not be present in API response

                                            # DELETE USER

# Passed
    Scenario: Verify 'DELETE' request method for deleting a USER should get empty response body    
    When user hits a 'DELETE' request method for route '/api/user' for userId '2' and expected response Status Code should be 204 also response body should be empty







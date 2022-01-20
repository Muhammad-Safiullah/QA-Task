Feature: Login API's validation by requesting valid and invalid email 
    Login should be successful on valid email and password and should respond correctly on invalid email or Password 

# Considering these are the only valid login credentials in DB
# email:  'eve.holt@reqres.in'
# password: 'cityslicka'

# Passed
    Scenario: Verify 'POST' request method for User Login is getting token in response when user provides valid email and password in the request body    
    When user hits a 'POST' request method for route '/api/login' and set 'eve.holt@reqres.in' value for email and 'cityslicka' value for password in the request API body and expected response Status Code should be 200 with the token attribute in response body

# Passed    
    Scenario: Verify 'POST' request method for User Login should get 'user not found' error in response when user provides Invalid email the request body    
    When user hits a 'POST' request method for route '/api/login' and set 'eve.holt@reqres.i' Invalid value for email and 'cityslicka' valid value for password in the request API body and expected response Status Code should be 400 with error message 'user not found' in response body

# Failed (Reason: Password validation is not handled)
    Scenario: Verify 'POST' request method for User Login should get 'user not found' error in response when user provides Invalid password the request body    
    When user hits a 'POST' request method for route '/api/login' and set 'eve.holt@reqres.in' valid value for email and 'hello' Invalid value for password in the request API body and expected response Status Code should be 400 with error message 'user not found' in response body

# Passed
    Scenario: Verify 'POST' request method for User Login should get 'user not found' error in response when user provides both Invalid email and password the request body    
    When user hits a 'POST' request method for route '/api/login' and set 'eve.holt@reqres.i' Invalid value for email and 'hello' Invalid value for password in the request API body and expected response Status Code should be 400 with error message 'user not found' in response body

    
    
    
    
    
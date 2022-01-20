Feature: Registration API's validation by requesting valid and invalid body 
    Registration should be successful when both email and Password is provided in the body and should correctly respond on invalid requests

# Passed
    Scenario: Verify 'POST' request method for User Registration is getting ID and token in response when user provides both email and password in the request body    
    When user hits a 'POST' request method for route '/api/register' and set 'eve.holt@reqres.in' value for email and 'pistol' value for password in the request API body and expected response Status Code should be 200

# Passed    
    Scenario: Verify 'POST' request method for User Registration is getting error for missing Email or Password in response when user donot provide both email and password in the request body    
    When user hits a 'POST' request method for route '/api/register' with empty body and expected response Status Code should be 400 and response error should be 'Missing email or username'

# Passed
    Scenario: Verify 'POST' request method for User Registration is getting error for Missing password in response when user donot provide and password in the request body    
    When user hits a 'POST' request method for route '/api/register' and set 'eve.holt@reqres.in' value for email and expected response Status Code should be 400 and response error should be 'Missing password'

# Passed
    Scenario: Verify 'POST' request method for User Registration is getting error for Missing email or username in response when user donot provide and email in the request body    
    When user hits a 'POST' request method for route '/api/register' and set 'hello' value for password and expected response Status Code should be 400 and response error should be 'Missing email or username'

# Passed
    Scenario: Verify 'POST' request method for User Registration is getting error note that Only defined users succeed registration when user provide other than this 'eve.holt@reqres.in' email in the request body along with any password   
    When user hits a 'POST' request method for route '/api/register' and set 'ev.holt@reqres.in' value for email and 'pistol' value for password in the request API body and expected response Status Code should be 400 and response error should be 'Note: Only defined users succeed registration'

# (Considering a fresh DataBase Table)
# Failed (Reason: Duplicate records validations are not handled)
    Scenario: Verify that user is not allowed to register the same email multiple times and should gets a response message of User already Exist (Considering a fresh DataBase)
    When user hits a 'POST' request method for route '/api/register' and register with this 'eve.holt@reqres.in' email twice should get a response Status Code should be 400 and response error message should be 'User Already Exist'
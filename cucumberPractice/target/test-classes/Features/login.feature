
@SmokeFeature
Feature: feature to test login functionality
	@smoketest
  Scenario: Check login is successfull eith valid creds
  
    Given user is on login page
    When user enter username and password
    And click on login page
    Then user is navigated to home page

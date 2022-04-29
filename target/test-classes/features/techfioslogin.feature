Feature: Tecfios login functionality validation 

Scenario: 1 user should be able to login with valid credentials 
	Given User is on the Techfios login page   
	When User enters username as "demo@techfios.com"  
	When User enters password as "abc123" 
	And User clicks on signin button  
	Then User should land on dashboard page
	
Scenario: 2 user should not be able to login with invalid password
	Given User is on the Techfios login page   
	When User enters username as "demo@techfios.com"  
	When User enters password as "abc1234" 
	And User clicks on signin button  
	Then User should land on dashboard page
	
Scenario: 3 user should not be able to login with invalid username 
	Given User is on the Techfios login page   
	When User enters username as "demo1@techfios.com"  
	When User enters password as "abc123" 
	And User clicks on signin button  
	Then User should land on dashboard page
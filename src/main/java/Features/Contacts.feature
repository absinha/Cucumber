Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact scenario

Given user is on login page
When title of the page is Free CRM
When user enters the "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user entering the contact details "<firstname>" and "<lastname>"
Then user close the browser

Examples:
	| username | password		| firstname | lastname 		|
	| abhi_01s | Aarush@123	| user001		|	lastname001	|
	| abhi_01s | Aarush@123	| user002		|	lastname002	|
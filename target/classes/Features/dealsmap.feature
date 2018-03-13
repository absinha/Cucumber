Feature: deal data creation

  Scenario: Free CRM Create a new deal scenario
    Given user is on login page
    When title of the page is Free CRM
    When user enters the username and password
      | username | password   |
      | abhi_01s | Aarush@123 |
    Then user clicks on login button
    Then user is on home page
    Then user moves to new deals page
    Then user entering the deals details
      | title 	 | amount | probability | commision |
      | rishu    | 1000 | 50 | 25 |
    Then user close the browser

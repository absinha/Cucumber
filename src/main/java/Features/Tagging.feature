Feature: Free CRM Application Testing

@SmokeTest
Scenario: login with correct username and correct password
Given This is a valid login test

@FunctionalTest
Scenario: login with incorrect username and correct password
Given This is a invalid login test

@FunctionalTest @SmokeTest
Scenario: Create a contact
Given This is contact test case

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is deal test case

@RegressionTest
Scenario: Create a task
Given This is task test case

@FunctionalTest
Scenario: Search a contact
Given This is search contact test case

@RegressionTest
Scenario: Search a task
Given This is search task

@SmokeTest
Scenario: Logout 
Given User logout from application


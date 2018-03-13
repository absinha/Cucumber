$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "login with correct username and correct password",
  "description": "",
  "id": "free-crm-application-testing;login-with-correct-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "This is a valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagging_StepDefinition.this_is_a_valid_login_test()"
});
formatter.result({
  "duration": 225496879,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "login with incorrect username and correct password",
  "description": "",
  "id": "free-crm-application-testing;login-with-incorrect-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "This is a invalid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagging_StepDefinition.this_is_a_invalid_login_test()"
});
formatter.result({
  "duration": 59259,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create a contact",
  "description": "",
  "id": "free-crm-application-testing;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@FunctionalTest"
    },
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "This is contact test case",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagging_StepDefinition.this_is_contact_test_case()"
});
formatter.result({
  "duration": 55993,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create a deal",
  "description": "",
  "id": "free-crm-application-testing;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    },
    {
      "line": 15,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "This is deal test case",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagging_StepDefinition.this_is_deal_test_case()"
});
formatter.result({
  "duration": 62059,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search a contact",
  "description": "",
  "id": "free-crm-application-testing;search-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "This is search contact test case",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagging_StepDefinition.this_is_search_contact_test_case()"
});
formatter.result({
  "duration": 69058,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Logout",
  "description": "",
  "id": "free-crm-application-testing;logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User logout from application",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagging_StepDefinition.user_logout_from_application()"
});
formatter.result({
  "duration": 58327,
  "status": "passed"
});
});
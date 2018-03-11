$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entering the contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "abhi_01s",
        "Aarush@123",
        "user001",
        "lastname001"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "abhi_01s",
        "Aarush@123",
        "user002",
        "lastname002"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"abhi_01s\" and \"Aarush@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entering the contact details \"user001\" and \"lastname001\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Contacts_StepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 13619370312,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 33634529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhi_01s",
      "offset": 17
    },
    {
      "val": "Aarush@123",
      "offset": 32
    }
  ],
  "location": "Contacts_StepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 1223340682,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10851351181,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 34564946,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 465661593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user001",
      "offset": 35
    },
    {
      "val": "lastname001",
      "offset": 49
    }
  ],
  "location": "Contacts_StepDefinition.user_enters_the_contact_details(String,String)"
});
formatter.result({
  "duration": 6203498630,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 743551123,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"abhi_01s\" and \"Aarush@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entering the contact details \"user002\" and \"lastname002\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Contacts_StepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 11247148906,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 27714203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhi_01s",
      "offset": 17
    },
    {
      "val": "Aarush@123",
      "offset": 32
    }
  ],
  "location": "Contacts_StepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 1222106969,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10147607349,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 38147565,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 532154681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user002",
      "offset": 35
    },
    {
      "val": "lastname002",
      "offset": 49
    }
  ],
  "location": "Contacts_StepDefinition.user_enters_the_contact_details(String,String)"
});
formatter.result({
  "duration": 6187383844,
  "status": "passed"
});
formatter.match({
  "location": "Contacts_StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 830337941,
  "status": "passed"
});
});
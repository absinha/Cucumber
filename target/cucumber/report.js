$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Deals.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Deals",
  "description": "",
  "id": "free-crm-create-deals",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Create a new deals scenario",
  "description": "",
  "id": "free-crm-create-deals;free-crm-create-a-new-deals-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the username and password",
  "rows": [
    {
      "cells": [
        "abhi_01s",
        "Aarush@123"
      ],
      "line": 7
    }
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
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entering the deals details",
  "rows": [
    {
      "cells": [
        "abc",
        "1000",
        "50",
        "25"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Deals_StepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 26433133858,
  "status": "passed"
});
formatter.match({
  "location": "Deals_StepDefinition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 44928318,
  "status": "passed"
});
formatter.match({
  "location": "Deals_StepDefinition.user_enters_the_username_and_password(DataTable)"
});
formatter.result({
  "duration": 598720560,
  "status": "passed"
});
formatter.match({
  "location": "Deals_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9179313852,
  "status": "passed"
});
formatter.match({
  "location": "Deals_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 33223447,
  "status": "passed"
});
formatter.match({
  "location": "Deals_StepDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 884632488,
  "status": "passed"
});
formatter.match({
  "location": "Deals_StepDefinition.user_enters_the_deal_details(DataTable)"
});
formatter.result({
  "duration": 3288945815,
  "status": "passed"
});
formatter.match({
  "location": "Deals_StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 760986410,
  "status": "passed"
});
});
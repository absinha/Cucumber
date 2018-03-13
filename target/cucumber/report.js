$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
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
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "abhi_01s",
        "Aarush@123"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entering the deals details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commision"
      ],
      "line": 13
    },
    {
      "cells": [
        "rishu",
        "1000",
        "50",
        "25"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Deals_Mapwithstepdefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 25104467542,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Mapwithstepdefinition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 280611723,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Mapwithstepdefinition.user_enters_the_username_and_password(DataTable)"
});
formatter.result({
  "duration": 3822459259,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Mapwithstepdefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 20928117119,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Mapwithstepdefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 363722602,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Mapwithstepdefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 3015664042,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Mapwithstepdefinition.user_enters_the_deal_details(DataTable)"
});
formatter.result({
  "duration": 14625673258,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Mapwithstepdefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 2009733450,
  "status": "passed"
});
});
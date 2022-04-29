$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/techfioslogin.feature");
formatter.feature({
  "line": 1,
  "name": "Tecfios login functionality validation",
  "description": "",
  "id": "tecfios-login-functionality-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "1 user should be able to login with valid credentials",
  "description": "",
  "id": "tecfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 8687668700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginstepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3629295500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginstepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3236478700,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 7486207700,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 3021423200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "2 user should not be able to login with invalid password",
  "description": "",
  "id": "tecfios-login-functionality-validation;2-user-should-not-be-able-to-login-with-invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters password as \"abc1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 5104676800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginstepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3192258300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 25
    }
  ],
  "location": "LoginstepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3133350900,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 4713667600,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 23842800,
  "error_message": "junit.framework.ComparisonFailure: wrong page expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.LoginstepDefinition.user_should_land_on_dashboard_page(LoginstepDefinition.java:51)\r\n\tat ✽.Then User should land on dashboard page(src/test/java/features/techfioslogin.feature:15)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "3 user should not be able to login with invalid username",
  "description": "",
  "id": "tecfios-login-functionality-validation;3-user-should-not-be-able-to-login-with-invalid-username",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enters username as \"demo1@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 4849463200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo1@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginstepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3230391000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginstepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3120589400,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 4569047700,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 23607900,
  "error_message": "junit.framework.ComparisonFailure: wrong page expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.LoginstepDefinition.user_should_land_on_dashboard_page(LoginstepDefinition.java:51)\r\n\tat ✽.Then User should land on dashboard page(src/test/java/features/techfioslogin.feature:22)\r\n",
  "status": "failed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darkSky.feature");
formatter.feature({
  "line": 3,
  "name": "darkSky feature",
  "description": "",
  "id": "darksky-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@darkSky"
    }
  ]
});
formatter.before({
  "duration": 5524467005,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "darkSkySD.setDarkSkyHomePage()"
});
formatter.result({
  "duration": 557464232,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid signup error message",
  "description": "",
  "id": "darksky-feature;verify-invalid-signup-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@darkSky-1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the darksky homepage page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I am on the darksky Register page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify am on RegisterPage by verifying Registerlink",
  "keyword": "Then "
});
formatter.match({
  "location": "darkSkySD.darkskyhomepage()"
});
formatter.result({
  "duration": 758537735,
  "status": "passed"
});
formatter.match({
  "location": "darkSkySD.RegisterPage()"
});
formatter.result({
  "duration": 184187600,
  "status": "passed"
});
formatter.match({
  "location": "darkSkySD.RegisterButton()"
});
formatter.result({
  "duration": 71125403,
  "status": "passed"
});
formatter.match({
  "location": "darkSkySD.VerifyRegisterPage()"
});
formatter.result({
  "duration": 33758820,
  "status": "passed"
});
formatter.after({
  "duration": 148036369,
  "status": "passed"
});
formatter.before({
  "duration": 3292608554,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "darkSkySD.setDarkSkyHomePage()"
});
formatter.result({
  "duration": 30021758,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Current Temperature should not be greater or less than the Temperature from Daily Timeline",
  "description": "",
  "id": "darksky-feature;verify-current-temperature-should-not-be-greater-or-less-than-the-temperature-from-daily-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@darkSky-2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on DarkSky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I verify current temp is not greater or less then temps from daily timeline",
  "keyword": "Then "
});
formatter.match({
  "location": "darkSkySD.setDarkSkyHomePage()"
});
formatter.result({
  "duration": 19106357,
  "status": "passed"
});
formatter.match({
  "location": "darkSkySD.temp()"
});
formatter.result({
  "duration": 547515263,
  "status": "passed"
});
formatter.after({
  "duration": 115591481,
  "status": "passed"
});
formatter.before({
  "duration": 2899813358,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "darkSkySD.setDarkSkyHomePage()"
});
formatter.result({
  "duration": 28210386,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "darksky-feature;verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@darkSky-3"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on DarkSky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I expand todays timeline",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "darkSkySD.setDarkSkyHomePage()"
});
formatter.result({
  "duration": 21271577,
  "status": "passed"
});
formatter.match({
  "location": "darkSkySD.expandtodaytimeline()"
});
formatter.result({
  "duration": 4330015287,
  "status": "passed"
});
formatter.match({
  "location": "darkSkySD.todaysTempValidation()"
});
formatter.result({
  "duration": 132813690,
  "status": "passed"
});
formatter.after({
  "duration": 139352376,
  "status": "passed"
});
formatter.before({
  "duration": 3162202237,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "darkSkySD.setDarkSkyHomePage()"
});
formatter.result({
  "duration": 40482465,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify timline is displayed in correct format",
  "description": "",
  "id": "darksky-feature;verify-timline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@darkSky-4"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on DarkSky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "location": "darkSkySD.setDarkSkyHomePage()"
});
formatter.result({
  "duration": 67280648,
  "status": "passed"
});
formatter.match({
  "location": "darkSkySD.timelineIncrement()"
});
formatter.result({
  "duration": 450649438,
  "status": "passed"
});
formatter.after({
  "duration": 117847292,
  "status": "passed"
});
});
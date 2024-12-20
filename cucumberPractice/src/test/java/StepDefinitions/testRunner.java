package StepDefinitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", glue = {"StepDefinitions"},
monochrome=true,
plugin= {"pretty","json:target/JSONReports/report.json",
		"html:target/HTMLReports/report.html",
		"junit:target/JUnitReports/report.junit"},
tags="@smoketest"

		)
public class testRunner {

}

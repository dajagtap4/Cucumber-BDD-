package StepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class loginSteps {


@Given("user is on login page")
public void user_is_on_login_page() {
    System.out.println("Given....");
}

@When("user enter username and password")
public void user_enter_username_and_password() {
	System.out.println("When....");
}

@And("click on login page")
public void click_on_login_page() {
	System.out.println("And....");
}

@Then("user is navigated to home page")
public void user_is_navigated_to_home_page() {
	System.out.println("Then....");
}
}

package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginstepDefinition extends TestBase{
	LoginPage loginPage;
	
	
//Given User is on the Techfios loging page

	@Given("^User is on the Techfios login page$") 
	public void user_is_on_the_Techfios_login_page() throws Throwable {
		initDriver();
	}

//When User enters username as "demo@techfios.com {string}" 
	@When ("^User enters username as \"([^\"]*)\"$")
public void user_enters_username_as(String username) throws Throwable {
		loginPage = PageFactory.initElements(driver, LoginPage.class);	
		loginPage.enterUserName(username);
			Thread.sleep(3000);
}
	//When User enters password as "abc123"
	@When ("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
		loginPage.enterPassword(password);
		Thread.sleep(3000);
		
	}
	//And User clicks on signin button  
	@And ("^User clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		loginPage.clickSignInButton();
		Thread.sleep(3000);
	}
	//Then User should land on dashboard page 
	@Then ("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() throws Throwable {
		
		String actualTitle = loginPage.getPageTitle();
		String expectedTitle = "Dashboard- iBilling";
		Assert.assertEquals("wrong page", expectedTitle, actualTitle);
		Thread.sleep(3000);
		}
	
}

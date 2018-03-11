package StepDefination;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Deals_StepDefinition {
	
	WebDriver driver;
	
	@Given("^user is on login page$")
	public void user_is_on_login_page(){
		System.setProperty("webdriver.chrome.driver","E:\\MySelFolder\\chromedriver_v2.36\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://freecrm.com");
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
	}
			
	@When("^title of the page is Free CRM$")
	public void title_of_the_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
	    
	}

	@When("^user enters the username and password$")
	public void user_enters_the_username_and_password(DataTable credentials) {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
		
		
					
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//input[@value='Login']")).click();
				
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		String homeTitle = driver.getTitle();
		Assert.assertEquals("CRMPRO", homeTitle);
		}
	
	@Then("^user moves to new deals page$")
	public void user_moves_to_new_deal_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title='Deals']"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	    
	}

	@Then("^user entering the deals details$")
	public void user_enters_the_deal_details(DataTable dealdata) {
		List<List<String>> dealValues = dealdata.raw();
		driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
		driver.findElement(By.name("amount")).sendKeys(dealValues.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(dealValues.get(0).get(3));
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//input[@name='btnFlag']")));
		
		
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() {
		driver.quit();
		
	}

	
}

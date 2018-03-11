//package StepDefination;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class LoginStepDefinition {
//	
//	WebDriver driver;
//	
//	@Given("^when user navigates to the gmail website$")
//	public void when_user_navigates_to_the_gmail_website(){
//		System.setProperty("webdriver.chrome.driver","E:\\MySelFolder\\chromedriver_v2.36\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.get("http://gmail.com");
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		
//	}
//	
//	@When("^user enters the \"(.*)\"$")
//	public void user_enters_the_username(String username) throws Exception {
//		Thread.sleep(5);
//		driver.findElement(By.xpath("//input[@type='email']")).sendKeys(username);
//		driver.findElement(By.xpath("//span[text()='Next']")).click();
//		
//	    
//	}
//
//	@When("^user enters the password$")
//	public void user_enters_the_password() {
//		WebElement ele = driver.findElement(By.name("password"));
//		ele.sendKeys("");
//		driver.findElement(By.xpath("//span[text()='Next']")).click();
//	    
//	}
//
//	@Then("^system should allow user to enter into the gmail$")
//	public void system_should_allow_user_to_enter_into_the_gmail() {
//		String title = driver.getTitle();
//		Assert.assertEquals("Gmail", title);
//	    System.out.println(title);
//	}
//
//	@Then("^user should navigate to the home page$")
//	public void user_should_navigate_to_the_home_page() {
//		System.out.println("user Navigates in Gmail");
//		driver.quit();
//	    
//	}
//	
//
//}

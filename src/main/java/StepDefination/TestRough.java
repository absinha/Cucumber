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
//
//public class TestRough {
//
//	public static void main(String[] args) {
//
//		
//			
//			System.setProperty("webdriver.chrome.driver","E:\\MySelFolder\\chromedriver_win32\\2.33\\chromedriver.exe");
//			WebDriver driver = new ChromeDriver();
//			driver.get("http://gmail.com");
//			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//			driver.findElement(By.xpath("//input[@type='email']")).sendKeys("");
//			driver.findElement(By.xpath("//span[text()='Next']")).click();
//			WebElement ele = driver.findElement(By.name("password"));
//			ele.sendKeys("");
//			driver.findElement(By.xpath("//span[text()='Next']")).click();
//		    
//			
//			
//			
//			
//		
//	}
//
//}

package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


/*@RunWith(Cucumber.class) 
@Cucumber.Options(format = {"pretty", "html:target/cucumber"})*/ 

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/main/java/Features/Contacts.feature", 		//the path of feature file
		glue={"StepDefination"},									//the path of step definition file
		format={"pretty","html:target/cucumber"},					//to generate different types of reporting
		monochrome= true,											//display the console output in proper readable format
		strict = true,												//it will check if any step is not defined in step def file
		dryRun = false												//to check the mapping is proper in between feature file & step def file
				
		)

public class TestRunner {
	
	}
 
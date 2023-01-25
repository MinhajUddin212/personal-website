Feature: Validate navigation functionality
  Scenario: Navigate to links on website
  When User clicks on skills nav link
  And User clicks on projects nav link 
  And user clicks on aboutme nav link 
  And User clicks on resume link 
  Then The page scrolls down to the skills section
  And The page scrolls down to the projects section
  And The page scrolls back up to the aboutme section 
  And The website redirects to resume page 

    
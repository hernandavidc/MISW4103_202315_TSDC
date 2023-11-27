Feature: CrearTag

    @user15 @web  
Scenario: Editar tag con datos correctos
Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 1 seconds
  And I enter password "Grizy5944*"
  And I wait for 2 seconds
  And I click Continue
  And I wait for 7 seconds
  And I click Tags
  And I wait for 3 seconds 
  And I click New Tags
  And I wait for 3 seconds 
  And I enter Name Tag "ut"
  And I wait for 2 seconds
  And I enter Color Tag "75e026"
  And I wait for 2 seconds
  And I enter Description Tag "saepe nam et totam ut"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag "voluptatum"
  And I wait for 2 seconds
  And I enter Color Tag "75e026"
  And I wait for 2 seconds
  And I enter Description Tag "harum voluptates velit dolor error"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds


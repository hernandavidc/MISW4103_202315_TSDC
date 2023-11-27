Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag con descripcion mayor a 500 caracteres
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
  And I enter Name Tag "dolorum"
  And I wait for 2 seconds
  And I enter Color Tag "75e026"
  And I wait for 2 seconds
  And I enter Description Tag "aut cupiditate voluptate est nihil"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds

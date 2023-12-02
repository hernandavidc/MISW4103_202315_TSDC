Feature: CrearTag

    @user15 @web  
Scenario: Editar tag con color en formato incorrecto
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
  And I enter Name Tag "Kiley"
  And I wait for 2 seconds
  And I enter Color Tag "341686381647043"
  And I wait for 2 seconds
  And I enter Description Tag "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag "Kiley"
  And I wait for 2 seconds
  And I enter Color Tag "2a53b9"
  And I wait for 2 seconds
  And I enter Description Tag "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds


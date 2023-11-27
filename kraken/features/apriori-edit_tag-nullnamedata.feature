Feature: CrearTag

    @user15 @web  
Scenario: Editar tag con nombre vacio
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
  And I enter Name Tag "Reinald"
  And I wait for 2 seconds
  And I enter Color Tag "4ff854"
  And I wait for 2 seconds
  And I enter Description Tag "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus."  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag ""
  And I wait for 2 seconds
  And I enter Color Tag "4ff854"
  And I wait for 2 seconds
  And I enter Description Tag "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus."  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds


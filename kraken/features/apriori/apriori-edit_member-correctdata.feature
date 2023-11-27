Feature: CreateMember
    @user1 @web
  Scenario: Crear un miembro con formatos correctos y editar con formatos correctos

  Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email "luciacolorado98@gmail.com"
    And I wait for 1 seconds
    And I enter password "Grizy5944*"
    And I wait for 2 seconds
    And I click Continue
    And I wait for 7 seconds
    And I click Members
    And I wait for 3 seconds 
    And I click Create New Member
    And I wait for 5 seconds
    And I Fill Name of the Member "Delaney Keat"
    And I wait for 3 seconds
    And I Fill Email of the Member "dkeat18@aboutads.info"
    And I wait for 3 seconds
    And I Fill Note of the Member "Aenean sit amet justo. Morbi ut odio."  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "Gunter MacGregor"   
    And I wait for 3 seconds
    And I Fill Email of the Member "gmacgregorf@com.com"   
    And I wait for 3 seconds
    And I Fill Note of the Member "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus." 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds

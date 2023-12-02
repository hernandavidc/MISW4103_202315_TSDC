Feature: CreateMember
    
    @user1 @web
  Scenario: Crear un miembro con formatos correctos y editar con formato incorrecto

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
    And I Fill Name of the Member "Bonita"
    And I wait for 3 seconds
    And I Fill Email of the Member "Wilber_Gutkowski@yahoo.com"
    And I wait for 3 seconds
    And I Fill Note of the Member "mollitia reiciendis ratione ab hic"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "Marcia"   
    And I wait for 3 seconds
    And I Fill Email of the Member "Linwood.Feest@hotmail.com"   
    And I wait for 3 seconds
    And I Fill Note of the Member "et sed ad rerum fuga" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds

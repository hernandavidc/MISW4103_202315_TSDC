Feature: CreateMember
    @user1 @web
  Scenario: Crear un miembro con email incorrecto

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
    And I Fill Name of the Member "Talon"
    And I wait for 3 seconds
    And I Fill Email of the Member "Lemuel"
    And I wait for 3 seconds
    And I Fill Note of the Member "Velit libero porro dolor et. Vel optio quisquam eaque rerum quo numquam a. Error mollitia tempore praesentium. Earum repellendus magni dolore repellat dolorum in eius quisquam."  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            


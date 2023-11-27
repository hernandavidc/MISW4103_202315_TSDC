Feature: CreateMember

    @user1 @web
  Scenario: Crear un miembro con solo email null

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
    And I Fill Name of the Member "Farica Deyes"
    And I wait for 3 seconds
    And I Fill Note of the Member "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            


Feature: CreateMember
@user1 @web
Scenario: Crear un miembro datos correctos

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
  And I Fill Name of the Member "Abagail"
  And I wait for 3 seconds
  And I Fill Email of the Member "Alessandra88@gmail.com"
  And I wait for 3 seconds
  And I Fill Note of the Member "Magnam est minima occaecati reprehenderit consectetur. Laborum quo ipsam dolores consequuntur. Magnam eum quis itaque quas numquam. Quaerat sint dolor ut aut molestias eligendi itaque impedit."  
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  Then I click Members 
  And I wait for 6 seconds

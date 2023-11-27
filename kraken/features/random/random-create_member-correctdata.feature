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
  And I Fill Name of the Member "Valentin"
  And I wait for 3 seconds
  And I Fill Email of the Member "Ashley6@yahoo.com"
  And I wait for 3 seconds
  And I Fill Note of the Member "Consequuntur ut minima aut nostrum porro. Sit fugit praesentium eaque quisquam sint minima tempora dolorem consectetur. Molestiae dolorem omnis explicabo et id. Minus qui ut."  
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  Then I click Members 
  And I wait for 6 seconds


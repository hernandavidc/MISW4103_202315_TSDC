Feature: CreateMember
    
    @user1 @web
  Scenario: Crear un miembro con formatos correctos y editar con nombre en formato incorrecto

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
    And I Fill Name of the Member "Verner"
    And I wait for 3 seconds
    And I Fill Email of the Member "Skye_Tremblay74@hotmail.com"
    And I wait for 3 seconds
    And I Fill Note of the Member "quod aspernatur earum eligendi officia"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "veniam vel ipsa unde voluptatem nemo aut ut necessitatibus aut qui animi et doloribus libero repellat cumque non aut repellendus aperiam consequatur odio est voluptas modi est accusamus dicta voluptatem non eius libero pariatur non quo atque qui itaque reprehenderit dolorum voluptatum repudiandae magnam reiciendis sit ipsum ut a dolores"   
    And I wait for 3 seconds
    And I Fill Email of the Member "Oswaldo"   
    And I wait for 3 seconds
    And I Fill Note of the Member "aut deleniti quia labore facilis" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds

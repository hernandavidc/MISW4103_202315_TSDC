const fs = require("fs");
const { faker,Faker } = require('@faker-js/faker');
const { en } = require('@faker-js/faker');

var randomColor = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

function start() {
   
    data =  `Feature: CreateMember
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
  And I Fill Name of the Member "${faker.name.firstName()}"
  And I wait for 3 seconds
  And I Fill Email of the Member "${faker.internet.email()}"
  And I wait for 3 seconds
  And I Fill Note of the Member "${faker.lorem.paragraph()}"  
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  Then I click Members 
  And I wait for 6 seconds

`;

fs.writeFileSync("features/random-create_member-correctdata.feature", data);
   
    data =  `Feature: CreateMember

    @user1 @web
  Scenario: Crear un miembro con name incorrecto

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
    And I Fill Name of the Member "${faker.lorem.paragraph()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.paragraph()}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/random-create_member-incorrectemaildata.feature", data);
    
    data =  `Feature: CreateMember
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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.paragraph()}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/random-create_member-incorrectemaildata.feature", data);
    
    data =  `Feature: CreateMember

    @user1 @web
  Scenario: Crear un miembro con data incorrecta

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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(500)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/random-create_member-incorrectdata.feature", data);

    data =  `Feature: CreateMember

    @user1 @web
  Scenario: Crear un miembro con data null

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
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/random-create_member-nulldata.feature", data);
    
    data =  `Feature: CreateMember

    @user1 @web
  Scenario: Crear un miembro con solo nombre null

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
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/random-create_member-nullnamedata.feature", data);

    data =  `Feature: CreateMember

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
    And I Fill Name of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/random-create_member-nullemaildata.feature", data);

    data =  `Feature: CreateMember

    @user1 @web
  Scenario: Crear un miembro con note mayor a 500 

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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/random-create_member-incorrectnotedata.feature", data);
   
    data =  `Feature: CreateMember
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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${faker.name.firstName()}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/random-edit_member-correctdata.feature", data);

    data =  `Feature: CreateMember
    
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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${faker.lorem.words(50)}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.name.firstName()}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/random-edit_member-nameincorrectdata.feature", data);

    data =  `Feature: CreateMember
    
    @user1 @web
  Scenario: Crear un miembro con formatos correctos y editar con email en formato incorrecto

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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${faker.name.firstName()}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.name.firstName()}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/random-edit_member-emailincorrectdata.feature", data);

    data =  `Feature: CreateMember
    
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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${faker.name.firstName()}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/random-edit_member-incorrectdata.feature", data);

    data =  `Feature: CreateMember
    
    @user1 @web
  Scenario: Crear un miembro con formatos correctos y editar con formato naughty

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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${faker.name.firstName()}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/random-edit_member-naughtydata.feature", data);

    data =  `Feature: CreateMember
    
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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${faker.name.firstName()}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/random-edit_member-incorrectnotedata.feature", data);

   

    data =  `Feature: CreateMember

    @user1 @web
  Scenario: Crear un miembro con data Naughty

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
    And I Fill Name of the Member "${faker.name.firstName()}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${faker.internet.email()}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${faker.lorem.words(5)}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/random-create_member-naughtydata.feature", data);

    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag con data vacia
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
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-nulldata.feature", data);


    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag con data en formato correcto
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
  And I enter Name Tag "${faker.lorem.words(5)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-nulldata.feature", data);
   
  data =  `Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag con name vacio
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
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-nullnamedata.feature", data);
    
    
    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag con data en description vacio
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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-nulldescriptiondata.feature", data);
   
    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag con color con formato incorrecto
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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-colorincorrectdata.feature", data);
  
    data =  `Feature: CrearTag

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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-descriptionincorrectdata.feature", data);
   
    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Editar tag con datos correctos
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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/random-edit_tag-correctdata.feature", data);

    data =  `Feature: CrearTag

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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/random-edit_tag-colorincorrectdata.feature", data);
      
    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Editar tag con description mayor a 500 caracteres
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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/random-edit_tag-descriptionincorrectdata.feature", data);

    data =  `Feature: CrearTag

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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag ""
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/random-edit_tag-nullnamedata.feature", data);

    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag data naughtyr
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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds
  And I enter Color Tag "${randomColor}"
  And I wait for 2 seconds
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-naughtydata.feature", data);


    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag con nombre naughtyr
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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds 
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-namenaughtydata.feature", data);


    data =  `Feature: CrearTag

    @user15 @web  
Scenario: Crear nuevo tag con nombre naughty
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
  And I enter Name Tag "${faker.lorem.words(1)}"
  And I wait for 2 seconds 
  And I enter Description Tag "${faker.lorem.words(5)}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/random-create_tag-descriptionnaughtydata.feature", data);

 
    data =  `Feature: CreateMember

    @user1 @web
  Scenario: Crear un miembro con name Naughty

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
  And I Fill Name of the Member "${faker.lorem.words(1)}"
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  Then I click Members 
  And I wait for 6 seconds 
`;

   fs.writeFileSync("features/random-create_member-namenaughtydata.feature", data); 
}

start();
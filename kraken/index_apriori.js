const fs = require("fs");

let dataMembersCorrectForm = fs.readFileSync("Member_MockDataCorrect.json");
let datapoolMembersCorrectForm = JSON.parse(dataMembersCorrectForm);
let dataMembersIncorrectForm = fs.readFileSync("Member_MockDataIncorrect.json");
let datapoolMembersIncorrectForm = JSON.parse(dataMembersIncorrectForm);
let dataMembersNaughtyForm = fs.readFileSync("Member_MockDataNaughty.json");
let datapoolMembersNaughtyForm = JSON.parse(dataMembersNaughtyForm);

let dataTagCorrectForm = fs.readFileSync("Tag_MockDataCorrect.json");
let datapoolTagCorrectForm = JSON.parse(dataTagCorrectForm);
let dataTagCorrectColorForm = fs.readFileSync("Tag_MockDataCorrectColor.json");
let datapoolTagCorrectColorForm = JSON.parse(dataTagCorrectColorForm);
let dataTagIncorrectForm = fs.readFileSync("Tag_MockDataIncorrect.json");
let datapoolTagIncorrectForm = JSON.parse(dataTagIncorrectForm);
let dataTagNaughtyForm = fs.readFileSync("Tag_MockDataNaughty.json");
let datapoolTagNaughtyForm = JSON.parse(dataTagNaughtyForm);



function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}  

function start() {

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
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
  And I Fill Name of the Member "${membercorrect.name}"
  And I wait for 3 seconds
  And I Fill Email of the Member "${membercorrect.email}"
  And I wait for 3 seconds
  And I Fill Note of the Member "${membercorrect.note}"  
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  Then I click Members 
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/apriori-create_member-correctdata.feature", data);

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersIncorrectForm[value];
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
    And I Fill Name of the Member "${memberincorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/apriori-create_member-incorrectnamedata.feature", data);
    
    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersIncorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${memberincorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/apriori-create_member-incorrectemaildata.feature", data);
    
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersIncorrectForm[value];
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
    And I Fill Name of the Member "${memberincorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${memberincorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${memberincorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/apriori-create_member-incorrectdata.feature", data);

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
    fs.writeFileSync("features/apriori-create_member-nulldata.feature", data);
    
    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
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
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/apriori-create_member-nullnamedata.feature", data);

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/apriori-create_member-nullemaildata.feature", data);

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersIncorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${memberincorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/apriori-create_member-incorrectnotedata.feature", data);

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    membercorrect2 = datapoolMembersCorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${membercorrect2.name}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect2.email}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect2.note}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/apriori-edit_member-correctdata.feature", data);

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersIncorrectForm[value];
    value = getRandomIntInclusive();
    membercorrect2 = datapoolMembersCorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${memberincorrect.name}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect2.email}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect2.note}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/apriori-edit_member-nameincorrectdata.feature", data);

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersIncorrectForm[value];
    value = getRandomIntInclusive();
    membercorrect2 = datapoolMembersCorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${membercorrect2.name}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${memberincorrect.email}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect2.note}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/apriori-edit_member-emailincorrectdata.feature", data);

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersIncorrectForm[value];
    value = getRandomIntInclusive();
    membercorrect2 = datapoolMembersCorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${memberincorrect.name}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${memberincorrect.email}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${memberincorrect.note}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/apriori-edit_member-incorrectdata.feature", data);

    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersNaughtyForm[value];
    value = getRandomIntInclusive();
    membercorrect2 = datapoolMembersCorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${memberincorrect.name}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${memberincorrect.email}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${memberincorrect.note}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/apriori-edit_member-naughtydata.feature", data);

    
    value = getRandomIntInclusive();
    membercorrect = datapoolMembersCorrectForm[value];
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersIncorrectForm[value];
    value = getRandomIntInclusive();
    membercorrect2 = datapoolMembersCorrectForm[value];
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
    And I Fill Name of the Member "${membercorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${membercorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds     
    And I click Edit Members
    And I wait for 5 seconds
    And I Fill Name of the Member "${membercorrect2.name}"   
    And I wait for 3 seconds
    And I Fill Email of the Member "${membercorrect2.email}"   
    And I wait for 3 seconds
    And I Fill Note of the Member "${memberincorrect.note}" 
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds
`;
    fs.writeFileSync("features/apriori-edit_member-incorrectnotedata.feature", data);

    
    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersNaughtyForm[value];//    
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
    And I Fill Name of the Member "${memberincorrect.name}"
    And I wait for 3 seconds
    And I Fill Email of the Member "${memberincorrect.email}"
    And I wait for 3 seconds
    And I Fill Note of the Member "${memberincorrect.note}"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            

`;
    fs.writeFileSync("features/apriori-create_member-naughtydata.feature", data);

    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];

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
    fs.writeFileSync("features/apriori-create_tag-nulldata.feature", data);


    value = getRandomIntInclusive();
    tagincorrect = datapoolTagIncorrectForm[value];
    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];    
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrect.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/apriori-create_tag-correctdata.feature", data);

    value = getRandomIntInclusive();
    tagcorrectcolor = datapoolTagCorrectColorForm[value];
    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];
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
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/apriori-create_tag-nullnamedata.feature", data);

    value = getRandomIntInclusive();
    tagcorrectcolor = datapoolTagCorrectColorForm[value];
    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];    
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/apriori-create_tag-nulldescriptiondata.feature", data);

    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];   
    value = getRandomIntInclusive();
    tagcorrectcolor = datapoolTagCorrectColorForm[value];
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagincorrect.color}"
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/apriori-create_tag-colorincorrectdata.feature", data);


    value = getRandomIntInclusive();
    tagincorrect = datapoolTagIncorrectForm[value];
    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];   
    value = getRandomIntInclusive();
    tagcorrectcolor = datapoolTagCorrectColorForm[value]; 
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagincorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/apriori-create_tag-descriptionincorrectdata.feature", data);

    value = getRandomIntInclusive();
    tagincorrect = datapoolTagIncorrectForm[value];
    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];    
    value = getRandomIntInclusive();
    tagcorrectcolor = datapoolTagCorrectColorForm[value];
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/apriori-edit_tag-correctdata.feature", data);

    value = getRandomIntInclusive();
    tagincorrect = datapoolTagIncorrectForm[value];
    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];    
    value = getRandomIntInclusive();
    tagcorrectcolor = datapoolTagCorrectColorForm[value];
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagincorrect.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/apriori-edit_tag-colorincorrectdata.feature", data);

    
    value = getRandomIntInclusive();
    tagincorrect = datapoolTagIncorrectForm[value];
    value = getRandomIntInclusive();
    tagcorrect = datapoolTagCorrectForm[value];    
    value = getRandomIntInclusive();
    tagcorrectcolor = datapoolTagCorrectColorForm[value];
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagincorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/apriori-edit_tag-descriptionincorrectdata.feature", data);

    value = getRandomIntInclusive();
    tagincorrect = datapoolTagIncorrectForm[value];
    value = getRandomIntInclusive(); 
    tagcorrect = datapoolTagCorrectForm[value];    
    value = getRandomIntInclusive();
    tagcorrectcolor = datapoolTagCorrectColorForm[value];
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds
  Then I click Return Tags
  And I wait for 6 seconds     
  And I click Edit Tag
  And I wait for 5 seconds
  And I enter Name Tag ""
  And I wait for 2 seconds
  And I enter Color Tag "${tagcorrectcolor.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagcorrect.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 7 seconds
  Then I click Return Tags
  And I wait for 6 seconds

`;
    fs.writeFileSync("features/apriori-edit_tag-nullnamedata.feature", data);

    value = getRandomIntInclusive();
    tagnaughty = datapoolTagNaughtyForm[value]; 
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
  And I enter Name Tag "${tagnaughty.name}"
  And I wait for 2 seconds
  And I enter Color Tag "${tagnaughty.color}"
  And I wait for 2 seconds
  And I enter Description Tag "${tagnaughty.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/apriori-create_tag-naughtydata.feature", data);

    value = getRandomIntInclusive(); 
    tagcorrect = datapoolTagCorrectForm[value]; 
    value = getRandomIntInclusive();
    tagnaughty = datapoolTagNaughtyForm[value]; 
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
  And I enter Name Tag "${tagnaughty.name}"
  And I wait for 2 seconds 
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/apriori-create_tag-namenaughtydata.feature", data);

    value = getRandomIntInclusive(); 
    tagcorrect = datapoolTagCorrectForm[value]; 
    value = getRandomIntInclusive();
    tagnaughty = datapoolTagNaughtyForm[value]; 
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
  And I enter Name Tag "${tagcorrect.name}"
  And I wait for 2 seconds 
  And I enter Description Tag "${tagnaughty.description}"  
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  Then I click Return Tags
  And I wait for 3 seconds
`;
    fs.writeFileSync("features/apriori-create_tag-descriptionnaughtydata.feature", data);

    value = getRandomIntInclusive();
    memberincorrect = datapoolMembersNaughtyForm[value];   
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
  And I Fill Name of the Member "${memberincorrect.name}"
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  Then I click Members 
  And I wait for 6 seconds 
`;

   fs.writeFileSync("features/apriori-create_member-namenaughtydata.feature", data);



} 
start();
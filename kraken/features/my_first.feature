Feature: Iniciar una conversación

@user1 @web
Scenario: Navegar a la pagina para crear Pages
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  When I enter email "cesaralej1392@hotmail.com"
  And I wait for 2 seconds
  And I enter password "Alejandro1392*"
  And I wait for 5 seconds
  And I click SignIn
  And I wait for 5 seconds
  And I click Pages
  And I wait for 2 seconds
  And I click New Page
  And I wait for 2 seconds
  And I add a title "New Post"
  And I wait for 2 seconds
  And I click description
  And I wait for 2 seconds
  And I enter description "Description"
  And I wait for 2 seconds
  And I publish the Page
  And I wait for 2 seconds
  And I Click in continue final review

@user2 @web
Scenario: Navegar a la pagina para crear Post
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  When I enter email "cesaralej1392@hotmail.com"
  And I wait for 2 seconds
  And I enter password "Alejandro1392*"
  And I wait for 5 seconds
  And I click SignIn
  And I wait for 5 seconds
  And I click Post
  And I wait for 2 seconds
  And I click New Post
  And I wait for 2 seconds
  And I add a title "New Post"
  And I wait for 2 seconds
  And I click description
  And I wait for 2 seconds
  And I enter description "Description"
  And I wait for 2 seconds
  And I publish the Page
  And I wait for 2 seconds
  And I Click in continue final review


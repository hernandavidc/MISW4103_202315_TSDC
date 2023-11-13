Feature: Test para crear Pages y Post en ghost

@user1 @web
Scenario: Navegar a la pagina para crear Pages
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
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
  And I wait for 2 seconds

@user2 @web
Scenario: Navegar a la pagina para crear Post
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 2 seconds
  And I enter password "Grizy5944*"
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
  And I wait for 2 seconds

@user3 @web
Scenario: Navegar a la pagina para crear Post
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 2 seconds
  And I enter password "Grizy5944*"
  And I wait for 5 seconds
  And I click SignIn
  And I wait for 5 seconds
  And I click Post
  And I wait for 2 seconds
  And I click Edit Post
  And I wait for 2 seconds
  And I add a title "New Post Modified"
  And I wait for 2 seconds
  And I click description
  And I wait for 2 seconds
  And I enter description "Description Modified"
  And I wait for 2 seconds
  And I publish the Page
  And I wait for 2 seconds
  And I Click in continue final review
  And I wait for 2 seconds

@user4 @web
Scenario: Navegar a la pagina para crear Post
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 2 seconds
  And I enter password "Grizy5944*"
  And I wait for 5 seconds
  And I click SignIn
  And I wait for 5 seconds 
 
@user5 @web  
Scenario: Eliminar post
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 1 seconds
  And I enter password "Grizy5944*"
  And I wait for 2 seconds
  And I click Continue
  And I wait for 7 seconds
  And I click Post
  And I wait for 3 seconds
  And I click Options Post
  And I wait for 2 seconds
  And I click Options Post
  And I wait for 2 seconds
  And I click Delete Post
  And I wait for 2 seconds
  And I click Confirm Delete
  And I wait for 6 seconds

  @user6 @web  
  Scenario: ver tag privado
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
  And I click View Tag Private 
  And I wait for 3 seconds

@user7 @web  
Scenario: Crear tag campos requeridos
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
  And I enter Name Tag "Tag Test"
  And I wait for 2 seconds
  And I enter Slug Tag "1234"
  And I wait for 2 seconds
  And I enter Description Tag "Tag ok "
  And I wait for 2 seconds
  And I click Retry Tags 
  And I wait for 3 seconds 
  And I click Return Tags 
  And I wait for 3 seconds
 
@user8 @web  
Scenario: Crear tag campos requeridos
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
  And I enter Name Tag "Tag Test"
  And I wait for 2 seconds
  And I enter Slug Tag "1234"
  And I wait for 2 seconds
  And I enter description_tag "Tag ok "
  And I wait for 2 seconds
  And I click Retry Tags 
  And I wait for 3 seconds 
  And I click Return Tags 
  And I wait for 3 seconds

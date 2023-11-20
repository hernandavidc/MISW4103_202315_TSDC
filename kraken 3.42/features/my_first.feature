Feature: Test para crear Pages y Post en ghost



  @user4 @web
Scenario: Login
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 2 seconds
  And I enter password "Grizy5944*"
  And I wait for 5 seconds
  And I click SignIn
  And I wait for 5 seconds 

 @user7 @web  
Scenario:  Prueba crear y publicar post.
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 2 seconds
  And I enter password "Grizy5944*"
  And I wait for 2 seconds
  And I click Continue
  And I wait for 7 seconds
  And I click Post
  And I wait for 3 seconds
  And I click New Post
  And I wait for 3 seconds
  And I enter Title Post "Otra cancion"
  And I wait for 2 seconds
  And I click Description
  And I wait for 3 seconds
  And I enter Description "Maestria en ingenieria de software"
  And I wait for 2 seconds  
  And I click Save Post
  And I wait for 2 seconds
  And I click Confirm Post 
  And I wait for 3 seconds 
  And I click Reconfirm Post
  And I wait for 3 seconds
  And I click Back
  And I wait for 3 seconds
  And I click Return New Post
  And I wait for 2 seconds
  
 @user5 @web  
Scenario:  Prueba crear Post en borrador
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 2 seconds
  And I enter password "Grizy5944*"
  And I wait for 2 seconds
  And I click Continue
  And I wait for 7 seconds
  And I click Post
  And I wait for 3 seconds
  And I click New Post
  And I wait for 3 seconds
  And I enter Title Post "Post Exitoso Draft"
  And I wait for 2 seconds
  And I click Description
  And I wait for 3 seconds
  And I enter Description "Prueba de post Descripcion"
  And I wait for 2 seconds  
  And I click Return New Post
  And I wait for 2 seconds  
 
 @user10 @web  
Scenario: Crear new Page Borrador 
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 1 seconds
  And I enter password "Grizy5944*"
  And I wait for 2 seconds
  And I click Continue
  And I wait for 7 seconds
  And I click Pages
  And I wait for 3 seconds 
  And I click New Page
  And I wait for 3 seconds 
  And I enter a title "Pruebas Page Borrador"
  And I wait for 2 seconds
  And I click Description
  And I wait for 3 seconds 
  And I enter Description "Uniandes"
  And I wait for 2 seconds
  And I click Return New Pages
  And I wait for 6 seconds

  @user20 @web  
Scenario: ver tag publicos
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 1 seconds
  And I enter password "Grizy5944*"
  And I wait for 2 seconds
  And I click Continue
  And I wait for 7 seconds
  And I click Tags 
  And I wait for 3 seconds 
  And I click Tags Publico
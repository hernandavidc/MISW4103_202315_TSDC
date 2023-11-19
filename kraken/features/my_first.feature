Feature: Test para crear Pages y Post en ghost

@user1 @web
Scenario: Navegar a la pagina para crear Pages
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 2 seconds
  And I enter password "Grizy5944*"
  And I wait for 5 seconds
  And I click SignIn
  And I wait for 5 seconds
  And I click Pages
  And I wait for 2 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter a title "New Post"
  And I wait for 2 seconds
  And I click Description
  And I wait for 2 seconds
  And I enter Description "Description"
  And I wait for 2 seconds
  And I publish the Page
  And I wait for 2 seconds
  And I Click in continue final review
  And I wait for 2 seconds

@user2 @web
Scenario: Navegar a la pagina para crear Post 
  Given I navigate to page "http://localhost:2368/ghost/"
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
  And I enter a title "New Post"
  And I wait for 2 seconds
  And I click Description
  And I wait for 2 seconds
  And I enter Description "Description"
  And I wait for 2 seconds
  And I publish the Page
  And I wait for 2 seconds
  And I Click in continue final review
  And I wait for 2 seconds

  
@user3 @web
Scenario: Navegar a la pagina para Editar Post
  Given I navigate to page "http://localhost:2368/ghost/"
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
Scenario: Login
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 2 seconds
  And I enter password "Grizy5944*"
  And I wait for 5 seconds
  And I click SignIn
  And I wait for 5 seconds 
 
 @user1 @web  
Scenario:  Prueba crear Post en borrador
  Given I navigate to page "http://localhost:2368/ghost/"
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

  @user1 @web  
Scenario:  Prueba crear Post en borrador
  Given I navigate to page "http://localhost:2368/ghost/"
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

  
@user1 @web  
Scenario:  Prueba crear y publicar post.
  Given I navigate to page "http://localhost:2368/ghost/"
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

  
@user1 @web  
Scenario:  Prueba crear post en el Calendario.
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
  And I click New Post
  And I wait for 3 seconds
  And I enter Title Post "Post Programado"
  And I wait for 2 seconds
  And I click Description
  And I wait for 3 seconds
  And I enter Description "Maestria en ingenieria de software"
  And I wait for 2 seconds  
  And I click Options New Post
  And I wait for 2 seconds
  And I click Options Schedule Post
  And I wait for 2 seconds
  And I enter Schedule New Post "2023-11-01"
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

@user1 @web  
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
  And I click Options New Post
  And I wait for 2 seconds
  And I click Delete Post
  And I wait for 2 seconds
  And I click Confirm Delete
  And I wait for 6 seconds

@user1 @web  
Scenario: Crear new Page Borrador 
  Given I navigate to page "http://localhost:2368/ghost/"
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

@user1 @web   
Scenario: Crear y publicar una page 
  Given I navigate to page "http://localhost:2368/ghost/"
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
  And I publish the Page
  And I wait for 6 seconds
  And I Click in continue final review
  And I wait for 6 seconds
  And I click Save Tags
  And I wait for 6 seconds
  And I click Return New Pages
  And I wait for 6 seconds

  @user1 @web  
Scenario: Crear nueva pages publicada calendario 
  Given I navigate to page "http://localhost:2368/ghost/"
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
  And I click Options New Post
  And I wait for 2 seconds
  And I click Options Schedule Post
  And I wait for 2 seconds
  And I enter Schedule New Post "2023-11-01"
  And I wait for 3 seconds
  And I publish the Page
  And I wait for 6 seconds
  And I Click in continue final review
  And I wait for 6 seconds
  And I click Save Tags
  And I wait for 6 seconds
  And I click Back
  And I wait for 5 seconds
  And I click Return New Pages
  And I wait for 3 seconds

  
@user1 @web  
Scenario: Editar page
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 1 seconds
  And I enter password "Grizy5944*"
  And I wait for 2 seconds
  And I click Continue
  And I wait for 7 seconds
  And I click Pages
  And I wait for 1 seconds
  And I click Edit Post
  And I wait for 1 seconds
  And I enter a title "prueba de cambio de contenido"
  And I wait for 1 seconds
  And I click Description
  And I wait for 1 seconds
  And I enter Description "exitosa"
  And I wait for 4 seconds
  And I click Return New Pages
  And I wait for 3 seconds
 

   @user1 @web  
Scenario: Eliminar pages 
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "luciacolorado98@gmail.com"
  And I wait for 1 seconds
  And I enter password "Grizy5944*"
  And I wait for 2 seconds
  And I click Continue
  And I wait for 7 seconds
  And I click Pages
  And I wait for 1 seconds
  And I click Edit Post
  And I wait for 2 seconds
  And I click Options New Post
  And I wait for 2 seconds
  And I click Delete Post
  And I wait for 2 seconds
  And I click Confirm Delete
  And I wait for 5 seconds

  @user1 @web  
Scenario: Crear nuevo tag 
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
  And I enter Name Tag "Tag Test"
  And I wait for 2 seconds
  And I enter Slug Tag "1234"
  And I wait for 2 seconds
  And I enter Description Tag "Tag ok "
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  And I click Return Tags
  And I wait for 3 seconds

  @user1 @web  
Scenario: Colocarle un tag a un post
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
  And I enter Name Tag "Tag Test"
  And I wait for 2 seconds
  And I enter Slug Tag "1234"
  And I wait for 2 seconds
  And I enter Description Tag "Tag ok "
  And I wait for 2 seconds
  And I click Save Tags 
  And I wait for 3 seconds 
  And I click Return Tags
  And I wait for 3 seconds
  And I click Post
  And I wait for 3 seconds
  And I click New Post
  And I wait for 3 seconds
  And I enter a title "Otra cancion"
  And I wait for 2 seconds
  And I click Description
  And I wait for 3 seconds
  And I enter Description "Maestria en ingenieria de software"
  And I wait for 2 seconds  
  And I click Options New Post
  And I wait for 2 seconds
  And I click Set Tag
  And I wait for 2 seconds
  And I click Select Tag
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

@user1 @web  
Scenario: Añadir members
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
  And I Fill Name of the Member "Alejandro Colorado"  
  And I wait for 3 seconds
  And I Fill Email of the Member "cesaralej1392@Hotmail.es"  
  And I wait for 3 seconds
  And I Fill Note of the Member "Editor"  
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  And I click Members 
  And I wait for 6 seconds


  
@user1 @web
Scenario: crear y editar members
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
  And I Fill Name of the Member "Alejandro Colorado"  
  And I wait for 3 seconds
  And I Fill Email of the Member "cesaralej1392@gmail.es"  
  And I wait for 3 seconds
  And I Fill Note of the Member "Editor"  
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  And I click Members 
  And I wait for 6 seconds
  And I click Edit Members
  And I wait for 5 seconds
  And I Fill Name of the Member "Alejandro Colorado Cambio"   
  And I wait for 3 seconds
  And I Fill Email of the Member "cesaralej1392@Hotmail.com"    
  And I wait for 3 seconds
  And I Fill Note of the Member "Editor Cambio"  
  And I wait for 3 seconds
  And I click save member
  And I wait for 7 seconds
  And I click Members 
  And I wait for 6 seconds

  @user1 @web  
Scenario: borrar miembro en ghost
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
  And I click Edit Members
  And I wait for 5 seconds 
  And I click Delete Members
  And I wait for 5 seconds 
  And I click Confirm Delete Members
  And I wait for 5 seconds 
  And I click Reconfirm Delete Members
  And I wait for 5 seconds 

  @user1 @web  
Scenario: ver tag publicos
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
  And I click Tags Publico
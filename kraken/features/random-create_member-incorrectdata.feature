Feature: CreateMember

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
    And I Fill Name of the Member "Frida"
    And I wait for 3 seconds
    And I Fill Email of the Member "Alvera12@gmail.com"
    And I wait for 3 seconds
    And I Fill Note of the Member "molestiae similique deleniti eos ratione qui amet enim deleniti recusandae quis nemo totam id ipsam aut sequi facere in tempora quia deleniti provident et eveniet maxime voluptatum architecto debitis et reiciendis sapiente quae aspernatur magnam eius perferendis at animi voluptate rerum sunt ut hic commodi eligendi hic nobis non consequatur odit quia non nisi quia rerum molestiae qui libero velit eius enim reprehenderit et molestiae sed cum porro odit animi tempore eveniet ipsam magnam suscipit aliquam odio eos ea maxime alias nulla ut hic necessitatibus ab qui voluptas culpa et sed vero iure praesentium ipsa debitis et ea ullam numquam ducimus ullam est consequatur eum ea minima incidunt facilis omnis error voluptatem minus qui repellendus ut culpa itaque quia ut tenetur molestiae molestiae eum debitis quia tempore architecto quibusdam corrupti earum excepturi assumenda soluta aut et neque quos qui natus aspernatur eius occaecati fuga facilis corporis dolore facere corrupti aliquam modi soluta consequatur nemo corporis repudiandae reprehenderit nostrum enim sed possimus commodi officiis ut nemo mollitia ea ea minima expedita beatae similique voluptatem voluptas ab odio totam possimus aperiam cupiditate explicabo molestiae qui facilis voluptatibus ut quis sed saepe dolorem et provident sapiente distinctio quis nisi magni vel ab molestiae sit quos omnis in voluptas error maxime vero placeat suscipit iste et iusto incidunt ab architecto modi quia impedit autem quibusdam est odio voluptas quaerat consequatur repellat rem ipsa nobis quo voluptatem voluptatem voluptatem sit autem pariatur repudiandae necessitatibus molestias cumque sed natus eligendi fugit repudiandae totam enim saepe sunt quia dolorem quos aliquam voluptas et sequi consequatur vel dolorem et quibusdam ea quia pariatur consequatur eveniet necessitatibus eveniet velit nostrum et veniam veniam voluptate deleniti esse dolorem alias ut qui nemo ratione in voluptatem officia molestiae voluptatum ab sit perspiciatis voluptas ut sit illo iusto accusamus ullam architecto ut officia reprehenderit facere quos et eum molestiae qui molestias unde quo facilis ab adipisci consectetur vel est aut et qui porro minima ab maxime velit molestias cum ratione sint porro et provident accusantium illo vitae voluptatem ut ipsum ut nobis ut nobis delectus quia et quisquam fuga quae quos saepe nisi voluptatem itaque vero possimus error architecto repellat aut ut labore quibusdam eum deleniti delectus aperiam deleniti vitae fugiat quo in quasi cum et eaque aliquid eveniet est nesciunt ad rerum eligendi ex id molestias ea eligendi alias cupiditate modi recusandae et quo repellendus debitis distinctio beatae suscipit ut officia maiores illum quos facilis repellat voluptate repudiandae minus nostrum quibusdam sit necessitatibus voluptatem modi sapiente rem unde amet consequuntur autem officia doloribus non harum necessitatibus quod placeat aut vero quas ab dolor consequatur tempore impedit est nam recusandae maiores ad atque et reprehenderit illo voluptas earum atque quaerat porro necessitatibus dolorem itaque nesciunt voluptatum mollitia est consequuntur aut molestiae qui deserunt sed accusamus rerum magni omnis nihil eum laborum possimus omnis exercitationem et saepe ut quisquam nobis quis sint quo ipsum doloribus sit et quia pariatur sint quas alias accusantium eum in saepe voluptas reprehenderit quisquam maiores nesciunt dolores porro"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            


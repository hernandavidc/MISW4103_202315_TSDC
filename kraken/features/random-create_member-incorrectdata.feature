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
    And I Fill Name of the Member "Domingo"
    And I wait for 3 seconds
    And I Fill Email of the Member "Sheldon_Runte@yahoo.com"
    And I wait for 3 seconds
    And I Fill Note of the Member "enim provident voluptatem velit nisi culpa corrupti aperiam laboriosam laudantium adipisci vero ut illo quibusdam saepe nihil accusamus minus porro optio velit maiores culpa ut recusandae itaque quo autem nostrum tempora perspiciatis quo eaque ea maiores porro temporibus officiis sunt nesciunt sapiente voluptas voluptatem cupiditate itaque beatae laudantium dolores id eos officia sed mollitia molestiae atque suscipit autem mollitia odio aliquam nisi eveniet tempore quos eum nemo nostrum aspernatur omnis alias sequi molestias recusandae molestiae voluptatibus qui ut id dicta distinctio harum similique eveniet aut aut et maiores dignissimos vel et sint qui excepturi atque dolorum illo sed atque perferendis totam voluptas ad delectus aperiam aut quas delectus et dignissimos voluptatem quod in rerum aliquam quasi quia non eos suscipit quibusdam sit error exercitationem molestiae dolores repudiandae quibusdam autem soluta autem magnam rerum autem nam itaque dicta culpa saepe velit aut veritatis nihil quia quam eveniet error aliquid ea rerum quasi rem laudantium suscipit vitae minus temporibus quia debitis officiis aut laudantium aut voluptatibus fuga numquam corporis eum minima praesentium a quasi iusto sed est nulla porro vitae ut rerum aut occaecati facere ut optio dicta et voluptas tempora est sequi officia sequi unde aut quia id atque a facere ut facilis eos aperiam vero qui placeat cumque aperiam est sint consequatur cum quia ipsum dolorem sit voluptatum consequatur inventore sit minima corporis unde maxime sunt nesciunt laboriosam cupiditate laborum dolorum dolorem quia possimus veniam nam repudiandae ut quod consequatur debitis aut numquam voluptatum ipsa exercitationem nulla omnis sed nostrum incidunt vel exercitationem cumque quibusdam voluptatibus aut quo qui natus nisi ratione aliquam nihil aut voluptas vitae voluptatibus assumenda nesciunt eaque reprehenderit laborum eos assumenda et aliquid consequatur ut accusamus omnis aliquid animi harum qui ex aliquam saepe minus occaecati ut sunt et praesentium iusto debitis quis illo quia consequatur dolorem voluptatem earum error dolor aut dolorem fuga veniam eius ratione omnis dolore quia nostrum sapiente consectetur rerum dolores blanditiis doloremque facilis reiciendis eligendi in inventore quod sapiente non vel aut vel maiores molestiae consequuntur quia minus dolorem assumenda iure sit blanditiis ducimus aliquid voluptatem consectetur unde in eaque officia rerum enim in ipsa pariatur nisi qui eos voluptas eligendi suscipit itaque nulla placeat nemo voluptas recusandae exercitationem esse et ut perspiciatis quia dolorem voluptatem sapiente et dolorum earum ullam similique autem quam sed est qui quisquam vero quidem exercitationem quisquam eligendi sed aut quod velit illum dolor repellat repellat magni dolores molestiae voluptatum enim in dolorum est libero laudantium soluta magni deserunt voluptatem doloribus repudiandae accusantium ut aut aut ut minima repellendus aut assumenda quasi magnam ea inventore qui ducimus eveniet et qui et voluptatem consequuntur illum est vero quae omnis in voluptatibus et est sed repellat voluptates nihil impedit ut earum illo quibusdam totam et dolores ut molestias necessitatibus blanditiis et est dolorem dolorem soluta voluptatum voluptas voluptas quos incidunt tenetur quod officiis autem ut sed sed officiis dolor rerum impedit qui consequatur voluptas doloremque aut odit magni cupiditate id praesentium ab est est officia non id aut"  
    And I wait for 3 seconds
    And I click save member
    And I wait for 7 seconds
    Then I click Members 
    And I wait for 6 seconds            


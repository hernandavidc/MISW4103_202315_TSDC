const { Given, When, Then } = require('@cucumber/cucumber');

//LOGIN 

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click SignIn', async function () {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

When('I click Pages', async function () {
    let element = await this.driver.$('*[data-test-nav="pages"]');
    return await element.click();
})

Then('I click New Page', async function () {
    let element = await this.driver.$('*[data-test-new-page-button]');
    return await element.click();
});

Then('I add a title {string}', async function (title) {
    let element = await this.driver.$('*[data-test-editor-title-input]');
    return await element.setValue(title);
});

Then('I add the message {string}', async function (message) {
    let element = await this.driver.$('*[data-koenig-dnd-container="true"]');
    return await element.val(message)      
});

Then('I click description', async function () {
    let element = await this.driver.$('[contenteditable="true"]');
    return await element.click();
});

Then('I enter description {string}', async function (description) {
    let element = await this.driver.$('[data-koenig-dnd-droppable="true"]');
    element.keys(['Control', 'a']);
    element.keys(['Backspace']);
    return await element.setValue(description);     
});

Then('I click and add Image', async function () {
    let element = await this.driver.$('*[data-kg-cardmenu-idx="1"]');
    return await element.click();      
});

Then('I publish the Page', async function () {
    let element = await this.driver.$('*[data-test-button="publish-flow"]');
    return await element.click();
});

Then('I Click in continue final review', async function () {
    let element = await this.driver.$('*[data-test-button="continue"]');
    return await element.click();
});

// CREATE POST 

When('I click Post', async function () {
    let element = await this.driver.$('*[data-test-nav="posts"]');
    return await element.click();
})

Then('I click New Post', async function () {
    let element = await this.driver.$('*[data-test-new-post-button]');
    return await element.click();
});

// EDIT POST

Then('I click Edit Post', async function () {
    let element = await this.driver.$('*[title="Go to Editor"]');
    return await element.click();
});

// ADD MEMBER



const { When, Then } = require('@cucumber/cucumber');

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});
When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});
When('I click continue', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});
When('I click select_post', async function() {
    let element = await this.driver.$('.ember-view.permalink.gh-list-data.gh-post-list-title');
    return await element.click();
});
When('I click options_new_post', async function() {
    let element = await this.driver.$('[data-test-psm-trigger]');
    return await element.click();
});
When('I click delete_post', async function() {
    let element = await this.driver.$('#entry-controls > div > div.settings-menu-content > div > button');
    return await element.click();
});
When('I click confirm_delete_post', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
});
When('I click tags', async function() {
    let element = await this.driver.$('[data-test-nav="tags"]');
    return await element.click();
});
When('I click view_tag_private', async function() {
    let element = await this.driver.$('[class="gh-btn "]');
    return await element.click();
})
When('I enter name_tag {string}', async function (name_tag) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name_tag);
});
When('I enter slug_tag {string}', async function (slug_tag) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(slug_tag);
});

When('I click post', async function() {
    let element = await this.driver.$('[data-test-nav="posts"]');
    return await element.click();
});
When('I click new_post', async function() {
    let element = await this.driver.$('[data-test-new-post-button]');
    return await element.click();
});
When('I enter title_post {string}', async function (title_post) {
    let element = await this.driver.$('[data-test-editor-title-input]');
    return await element.setValue(title_post);
});
When('I click new_description_post', async function() {
    let element = await this.driver.$('[contenteditable="true"]');
    return await element.click();
});
When('I enter description_post {string}', async function (description_post) {
    let element = await this.driver.$('[data-koenig-dnd-droppable="true"]');
    element.keys(['Control', 'a']);
    element.keys(['Backspace']);
    return await element.setValue(description_post);
});
When('I click return_new_post', async function() {
    let element = await this.driver.$('[data-test-link="posts"]');
    return await element.click();
});
When('I click save_new_post', async function() {
    let element = await this.driver.$('[data-test-button="publish-flow"]');
    return await element.click();
});
When('I click confirm_new_post', async function() {
    let element = await this.driver.$('[data-test-button="continue"]');
    return await element.click();
});
When('I click reconfirm_new_post', async function() {
    let element = await this.driver.$('[data-test-task-button-state="idle"]');
    return await element.click();
});
When('I click back_to_post', async function() {
    let element = await this.driver.$('[data-test-button="back-to-editor"]');
    return await element.click();
});

When('I click options_schedule_new_post', async function() {
    let element = await this.driver.$('[data-test-date-time-picker-date-input]');
    return await element.click();
});
When('I enter schedule_new_post {string}', async function (schedule_new_post) {
    let element = await this.driver.$('[placeholder="YYYY-MM-DD"]');
    return await element.setValue(schedule_new_post);
});
When('I click edite_post', async function() {
    let element = await this.driver.$('[title="Go to Editor"]');
    return await element.click();
});
When('I click new_tags', async function() {
    let element = await this.driver.$('[class="ember-view gh-btn gh-btn-primary"]');
    return await element.click();
});
When('I click save_tags', async function() {
    let element = await this.driver.$('[data-test-task-button-state="idle"]');
    return await element.click();
});
When('I enter description_tag {string}', async function (description_tag) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(description_tag);
});
When('I click retry_tags', async function() {
    let element = await this.driver.$('[data-test-task-button-state="failure"]');
    return await element.click();
});
When('I click return_tags', async function() {
    let element = await this.driver.$('[data-test-link="tags-back"]');
    return await element.click();
});



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

When('I click Members', async function () {
    let element = await this.driver.$('*[data-test-nav="members"]');
    return await element.click();
});

When('I click Create New Member', async function () {
    let element = await this.driver.$('*[data-test-new-member-button="true"]');
    return await element.click();
});

When('I Fill Name of the Member {string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I Fill Email of the Member {string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});

When('I Fill Note of the Member {string}', async function (note) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note);
});

When('I click save member', async function() {
    let element = await this.driver.$('[data-test-button="save"]');
    return await element.click();
})

// EDIT MEMBER

When('I click Details Members', async function () {
    let element = await this.driver.$('*[data-test-table-data="details"]');
    return await element.click();
});

//CONTINUE NEXT PAGE
When('I click Continue', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});
//OPTIONS POST
When('I click Options Post', async function() {
    let element = await this.driver.$('[data-test-psm-trigger]');
    return await element.click();
});
//DELETE POST
When('I click Delete Post', async function() {
    let element = await this.driver.$('#entry-controls > div > div.settings-menu-content > div > button');
    return await element.click();
});
//CONFIRMATION DELETE POST
When('I click Confirm Delete', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
});
//SELECT TAGS MENU
When('I click Tags', async function() {
    let element = await this.driver.$('[data-test-nav="tags"]');
    return await element.click();
});
//TAGS PRIVATE
When('I click View Tag Private', async function() {
    let element = await this.driver.$('[class="gh-btn "]');
    return await element.click();
})
//NAME TAG
When('I enter Name Tag {string}', async function (name_tag) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name_tag);
});

When('I enter Slug Tag {string}', async function (slug_tag) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(slug_tag);
});

When('I click New Tags', async function() {
    let element = await this.driver.$('[class="ember-view gh-btn gh-btn-primary"]');
    return await element.click();
});
When('I click Save Tags', async function() {
    let element = await this.driver.$('[data-test-task-button-state="idle"]');
    return await element.click();
});
When('I enter Description Tag {string}', async function (description_tag) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(description_tag);
});
When('I click Retry Tags', async function() {
    let element = await this.driver.$('[data-test-task-button-state="failure"]');
    return await element.click();
});
When('I click Return Tags', async function() {
    let element = await this.driver.$('[data-test-link="tags-back"]');
    return await element.click();
});






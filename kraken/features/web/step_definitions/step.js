const { Given, When, Then } = require('@cucumber/cucumber');

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


When('I click Post', async function () {
    let element = await this.driver.$('*[data-test-nav="posts"]');
    return await element.click();
})

Then('I click New Post', async function () {
    let element = await this.driver.$('*[data-test-new-post-button]');
    return await element.click();
});
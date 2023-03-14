import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from 'chai';
import { StitchWorld } from "features/world";
import { getLockedUserCredentials, getStandardUserCredentials } from "../../helpers/user-credentials";

Given('I am on the Swag Labs homepage', async function (this: StitchWorld) {
    const page = this.page!;

    await page.goto(this.parameters.url);
});

When('I enter valid user credentials', async function (this: StitchWorld) {
    const page = this.page!;
    const { username, password } = getStandardUserCredentials(this.parameters.env);

    await page.fill(this.locators.username, username!);
    await page.fill(this.locators.password, password!);
    await page.click(this.locators.loginButton);
});

When('I enter locked user credentials', async function (this: StitchWorld) {
    const page = this.page!;
    const { username, password } = getLockedUserCredentials(this.parameters.env);

    await page.fill(this.locators.username, username!);
    await page.fill(this.locators.password, password!);
    await page.click(this.locators.loginButton);
});

When('I enter invalid user credentials', async function (this: StitchWorld) {
    const page = this.page!;

    await page.fill(this.locators.username, 'fakeusername');
    await page.fill(this.locators.password, 'fakepassword');
    await page.click(this.locators.loginButton);
});

When('I enter invalid username', async function (this: StitchWorld) {
    const page = this.page!;
    const { password } = getStandardUserCredentials(this.parameters.env);

    await page.fill(this.locators.username, 'fakeusername');
    await page.fill(this.locators.password, password!);
    await page.click(this.locators.loginButton);
});

When('I enter invalid password', async function (this: StitchWorld) {
    const page = this.page!;
    const { username } = getStandardUserCredentials(this.parameters.env);

    await page.fill(this.locators.username, username!);
    await page.fill(this.locators.password, 'fakepassword');
    await page.click(this.locators.loginButton);
});

When('I do not enter user credentials', async function (this: StitchWorld) {
    const page = this.page!;

    await page.fill(this.locators.username, '');
    await page.fill(this.locators.password, '');
    await page.click(this.locators.loginButton);
});

Then('I should see invalid credential error message', async function (this: StitchWorld) {
    const page = this.page!;
    const actualErrorMessage = await page.locator(this.locators.invalidCredentialsError).textContent();

    await page.waitForSelector(this.locators.username, {
        state: 'visible',
    });

    expect(actualErrorMessage).to.eq(this.locators.expectedInvalidCredentialsErrorMessage);
});

Then('I should see username is required error message', async function (this: StitchWorld) {
    const page = this.page!;
    const actualErrorMessage = await page.locator(this.locators.invalidCredentialsError).textContent();

    await page.waitForSelector(this.locators.username, {
        state: 'visible',
    });

    expect(actualErrorMessage).to.eq(this.locators.expectedUsernameRequiredErrorMessage);
});

Then('I should locked user error message', async function (this: StitchWorld) {
    const page = this.page!;
    const actualErrorMessage = await page.locator(this.locators.invalidCredentialsError).textContent();

    await page.waitForSelector(this.locators.username, {
        state: 'visible',
    });

    expect(actualErrorMessage).to.eq(this.locators.expectedLockedOutUserErrorMessage);
});

Then('I should be logged in', async function (this: StitchWorld) {
    const page = this.page!;

    // Ideally we should assert the user email or username here.

    await page.waitForSelector(this.locators.app_logo, {
        state: 'visible',
    });
    await page.waitForSelector(this.locators.shopping_cart, {
        state: 'visible',
    });
});

Then('I should not be logged in', async function (this: StitchWorld) {
    const page = this.page!;

    await page.waitForSelector(this.locators.username, {
        state: 'visible',
    });
});

import { type Page } from "playwright";

export class LoginPage {
  readonly usernameFieldLocator = '[data-test="username"]';
  readonly passwordFieldLocator = '[data-test="password"]';
  readonly loginButtonLocator = '[data-test="login-button"]';

  constructor (private readonly page: Page) {}

  async login(username: string, password: string) {
    await this.page.locator(this.usernameFieldLocator).fill(username);
    await this.page.locator(this.passwordFieldLocator).fill(password);
    await this.page.locator(this.loginButtonLocator).click();
  }
}

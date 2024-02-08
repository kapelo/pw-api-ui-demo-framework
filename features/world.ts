import { setDefaultTimeout, setWorldConstructor, World } from "@cucumber/cucumber";
import { APIRequestContext, Browser, BrowserContext, chromium, LaunchOptions, Page, request } from "playwright";

export type WorldParameters = {
    env: 'staging' | 'production';
    url: string;
    apiUrl: string;
    headless: boolean;
};

export class DemoWorld extends World<WorldParameters> {
    browser: Browser | null = null;
    context: BrowserContext | null = null;
    page: Page | null = null;
    apiRequest: APIRequestContext | null = null;
    
    async initialize(options?: LaunchOptions) {
        this.browser = await chromium.launch({
            headless: process.env.CI ? true : this.parameters.headless,
            ...options,
        });
        this.apiRequest = await request.newContext({ baseURL: this.parameters.apiUrl });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async cleanup() {
        if (this.context) {
            await this.context.close();
        }
        if (this.browser) {
            await this.browser.close();
        }
        if (this.apiRequest) {
            await this.apiRequest.dispose();
        }
    }
}

setDefaultTimeout(120000);
setWorldConstructor(DemoWorld);

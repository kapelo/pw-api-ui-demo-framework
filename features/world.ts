import { setDefaultTimeout, setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, LaunchOptions, Page } from "playwright";


export type WorldParameters = {
    env: 'staging' | 'production';
    url: string;
    headless: boolean;
};

export class StitchWorld extends World<WorldParameters> {
    browser: Browser | null = null;
    context: BrowserContext | null = null;
    page: Page | null = null;
    locators: any;
    
    async initialize(options?: LaunchOptions) {
        this.browser = await chromium.launch({
            headless: this.parameters.headless,
            ...options,
        });
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
    }
}

setDefaultTimeout(120000);
setWorldConstructor(StitchWorld);

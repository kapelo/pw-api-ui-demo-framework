import { After, Before } from "@cucumber/cucumber";
import { StitchWorld } from "./world";

Before(async function (this: StitchWorld) {
    await this.initialize();
    this.locators = await import (`../locators/${this.parameters.env}.locator`);
});

After(async function (this: StitchWorld) {
    await this.cleanup();
});

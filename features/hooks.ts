import { After, Before } from "@cucumber/cucumber";
import { DemoWorld } from "./world";

Before(async function (this: DemoWorld) {
    await this.initialize();
});

After(async function (this: DemoWorld) {
    await this.cleanup();
});

import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from 'chai';
import { DemoWorld } from "features/world";
import { getStandardUserCredentials } from "../../lib/helpers/user-credentials";
import { LoginPage } from "../../lib/pages/login.page";
import { InventoryPage } from "../../lib/pages/inventory.page";
import { sortInAscendingOrder, sortInDescendingOrder } from "../../lib/helpers/utility";

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('I am on the Swag Labs login page', async function (this: DemoWorld) {
  const page = this.page!;
  
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  
  await page.goto(this.parameters.url);
  expect(await page.title()).to.equal("Swag Labs");
});

When('I enter valid user credentials', async function (this: DemoWorld) {
  const page = this.page!;

  const { username, password } = getStandardUserCredentials(this.parameters.env);

  await loginPage.login(username!, password!);
});

Then('I should be logged in', async function (this: DemoWorld) {
  const page = this.page!;
  
  // Ideally we should assert the user email or username here.
  await page.waitForSelector(inventoryPage.appLogoLabel, {
    state: 'visible',
  });
  await page.waitForSelector(inventoryPage.shoppingCartDiv, {
    state: 'visible',
  });
});

When('I sort inventory items in ascending order', async function (this: DemoWorld) {
  const page = this.page!;

  const activeOption = await page.locator(inventoryPage.activeOption).textContent();
  expect(activeOption).to.equal('Name (A to Z)');
});

When('I sort inventory items in descending order', async function (this: DemoWorld) {
  const page = this.page!;
  const descendingOption = 'Name (Z to A)';

  await page.locator(inventoryPage.productSortSelectLocator).selectOption({ label: descendingOption });

  const activeOption = await page.locator(inventoryPage.activeOption).textContent();
  expect(activeOption).to.equal(descendingOption);
});

Then('items should be sorted in ascending order', async function (this: DemoWorld) {
  const page = this.page!;

  let itemNames: string[] = [];

  const inventoryItems = await page.locator(inventoryPage.inventoryItemDiv).locator(inventoryPage.inventoryItemNameLabel).all();

  for (let i = 0; i < inventoryItems.length; i++) {
    itemNames[i] = await inventoryItems[i].innerText();
  }

  const sortedItemsAscOrder = sortInAscendingOrder(itemNames);

  for (let i = 0; i < inventoryItems.length; i++) {
    expect(itemNames[i]).to.equal(sortedItemsAscOrder[i]);
  }
});

Then('items should be sorted in descending order', async function (this: DemoWorld) {
  const page = this.page!;

  let itemNames: string[] = [];
  
  const inventoryItems = await page.locator(inventoryPage.inventoryItemDiv).locator(inventoryPage.inventoryItemNameLabel).all();
  
  for (let i = 0; i < inventoryItems.length; i++) {
    itemNames[i] = await inventoryItems[i].innerText();
  }
  
  const sortedItemsDescOrder = sortInDescendingOrder(itemNames);
  
  for (let i = 0; i < inventoryItems.length; i++) {
    expect(itemNames[i]).to.equal(sortedItemsDescOrder[i]);
  }
});

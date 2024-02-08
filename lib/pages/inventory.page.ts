import { type Page } from "playwright";

export class InventoryPage {
  readonly appLogoLabel = '.app_logo';
  readonly shoppingCartDiv = '.shopping_cart_link';

  readonly activeOption = '.active_option';
  readonly productSortSelectLocator = '[data-test="product_sort_container"]';

  readonly inventoryItemDiv = '.inventory_item';
  readonly inventoryItemNameLabel = '.inventory_item_name';

  constructor (private readonly page: Page) {}
}

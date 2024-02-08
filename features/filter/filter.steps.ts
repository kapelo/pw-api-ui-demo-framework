import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from 'chai';

let allEntries: any[] = [];
let filteredResult: any[] = [];

Given('I get all entries from Public APIs', async function () {
  const apiRequest = this.apiRequest!;
  const response = await apiRequest.get('/entries');

  expect(response.ok()).true;
  expect(response.status()).to.equal(200);
  
  allEntries = (await response.json()).entries;

  expect(allEntries.length).to.be.greaterThan(0);
});

When(/^I filter by (.*)$/, async function (category) {
  if (allEntries.length > 0) {
    for (let i = 0; i < allEntries.length; i++) {
      if (allEntries[i].Category === category) {
        filteredResult.push(allEntries[i]);
      }
    }
  }

  expect(filteredResult.length).to.be.lessThan(allEntries.length);
});

Then(/^returned entries should be of length (.*)$/, async function (num) {
  expect(filteredResult.length).to.equal(Number(num));

  console.log(filteredResult);
});

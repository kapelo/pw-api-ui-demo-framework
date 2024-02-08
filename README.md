# playwright-api-ui-demo-symphony

Playwright is a Node. js library to automate Chromium, Firefox, and WebKit with a single API.

This demo project also uses Cucumber to write tests in Gherkin language.

## Setup

### *Install Node Version Manager*

Node Version Manager can manage node versions

- Install curl and add NVM Node Version Manager

```bash
sudo apt-get install curl && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
```

- Install NodeJS Version 18.15.0 or higher

```bash
nvm install 18.15.0
nvm use 18.15.0 
```

### *Install yarn globally*

```bash
npm install -g yarn 
```

### *Install framework packages*

```bash
yarn install
```

## Run test

### *Add credentials to environment variable via terminal*

Open terminal then run the following commands. Ideally credentials will be different for different environments

Production:

```bash
export PRODUCTION_STANDARD_USERNAME=standard_user
export PRODUCTION_STANDARD_PASSWORD=secret_sauce
```

### Run the test locally

Run the following command to download & install the browsers first: `npx playwright install`

Follow the steps below to run the tests on your local

- Run only API test

  ```bash
  ENVIRONMENT=production npm run test:api
  ```

- Run only UI test

  ```bash
  ENVIRONMENT=production npm run test:ui
  ```

- Run all tests

  ```bash
  ENVIRONMENT=production npm run test
  ```

### Run the test on CI

1. Run the follo

### View Test Result

After test run a html report (html-report.html) is generated and stored in the reports folder.
Download the file and view it in your browser.

![Result](result/cucumber-report.png)

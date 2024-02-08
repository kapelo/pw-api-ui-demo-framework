# playwright-api-ui-demo-symphony

Playwright is a Node. js library to automate Chromium, Firefox, and WebKit with a single API

## Setup

### *Install Node Version Manager*

Node Version Manager can manage node versions

- Install curl and add NVM Node Version Manager

```
sudo apt-get install curl && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
```

- Install NodeJS Version 18.15.0 or higher

```
nvm install 18.15.0
nvm use 18.15.0 
```

### *Install yarn globally*

```
npm install -g yarn 
```

### *Install framework packages*

```
yarn install
```

## Run test

### *Add credentials to environment variable via terminal*

Open terminal then run the following commands. Ideally credentials will be different for different environments

Production:
```
export PRODUCTION_STANDARD_USERNAME=standard_user
export PRODUCTION_STANDARD_PASSWORD=secret_sauce
```

### *Run the test locally*

1. Run the following command to download & install the browsers first: `npx playwright install`
2. ENVIRONMENT can be set to 'production'. Use the following command to run all tests: `ENVIRONMENT=production npm run test`

### *Run the test on CI*

1. Run the follo

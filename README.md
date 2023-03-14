# logispin-login-assessment

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

### *Run test*

``` 
ENVIRONMENT=production yarn run test
```
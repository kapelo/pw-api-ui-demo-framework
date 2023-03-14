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

## Run test

### *Add credentials to environment variable via terminal*

Open terminal then run the following commands. Ideally credentials will be different for different environments

Production:
```
export PRODUCTION_STANDARD_USERNAME=standard_user
export PRODUCTION_STANDARD_PASSWORD=secret_sauce
export PRODUCTION_LOCKED_USERNAME=locked_out_user
```

Staging:
```
export STAGING_STANDARD_USERNAME=standard_user
export STAGING_STANDARD_PASSWORD=secret_sauce
export STAGING_LOCKED_USERNAME=locked_out_user
```

### *Run the test*

ENVIRONMENT can be set to 'production' or 'staging'. Config, locators & validation messages will be loaded based on the environment test is running on

```
ENVIRONMENT=production yarn run test
```

## Test Plan

- **Scope**: This test plan describes the testing approach and overall framework that will drive the testing of **swag Labs sample app**.

- **Test Objectives**: The objective of the test is to verify that the login functionality of **Swag Labs sample app** works according to the requirements. Tests will execute and verify manual and automated test cases, identify, log, and retest all high and medium severity defects per the acceptance criteria, and prioritize lower severity defects for fixing dependent on the time and resources in each sprint. The final product of testing is two-fold:
  - A production-ready software
  - A set of stable test scripts that can be reused for Functional and UAT test execution
- **Testing Process**: Process to be followed while testing.
  - **Understanding Requirements**:
    - Requirement specifications is sent by Product
    - Understanding of requirements is done by QA team along with development team and questions are asked due to in depth analysis of process flows, boundaries and use case scenarios
    - Questions are collated and sent to Product
    - Response to questions asked are provided by Product
  - **Preparing Test Cases**:
    - QA team will author test cases based on the requirement specifications. This will cover all scenarios for requirements.
  - **Creating Test Data**:
    - Test data will be created by respective QA Engineer on local environment :upside_down_face: based on scenarios and test cases.
  - **Executing Test Cases**:
    - Test cases will be executed by respective QA Engineer on local environment based on designed scenarios, test cases and test data.
    - Test results (Pass/Fail/Blocked) will be updated in test case suite.
  - **Defect Logging and Reporting**: QAs will be logging onto Kanban board (assuming Logispin uses Jira :slightly_smiling_face:) all the defects/bugs found during execution of test cases and during verification of tickets on Kanban boards.
  - **Retesting and Regression Testing**: Retesting for fixed bugs will be done by respective QA once it is resolved by respective developer and bug/defect status will be updated accordingly. In certain cases, regression testing will be done if required.
  - **Deployment/Delivery**: Release/Launch date to Production will be determined by Project stakeholders.
  - **Scope and Levels of Testing**:
    - API testing - testing of individual software components or modules. Done per API specifications.
    - Integration testing – testing of integrated modules to verify combined functionality after integration.
    - Sanity testing – testing to determine if a new software version is performing well enough to accept it for a major testing effort. If application is crashing for initial use then system is not stable enough for further testing and application is assigned to fix.
    - Exploratory - the purpose of this test is to make sure critical defects are removed before the next levels of testing can start. This will include positive and negative tests.
    - Functional - this type of testing ignores the internal parts and focuses on whether the output is per requirement or not.
    - Compatibility testing – testing how well web app performs in most used hardware/software/operating system/network environments.
    - User Acceptance -  this test focuses on validating the business logic. It allows the end users to review the system prior to deployment.
    - System testing – entire system is tested as per the requirements.
    - Regression testing – testing the application as a whole after modifications in any module or functionality.  It is difficult to perform regression testing on the entire application so a selective process of the most critical paths is done.
    - Performance testing – performance testing to check system behavior under load. Will involve testing under heavy loads with several consecutive users, happening within a few seconds of each other. These tests are done to determine at what point the system’s response time degrades or fails.
  - **Test Deliverables**:
    - Test Plan
    - Functional Test Scenarios/Cases
    - Logged defects on JIRA boards
    - Passed tickets on JIRA boards
    - Failed tickets on JIRA boards
    - Daily/Weekly status reports that includes bug reports
    - Test closure report
  - **Features to be Tested**:
    - Swag Labs Login functionality (FE)
  - **Test Schedule**: Several phases will be carried out here from planning to regression testing. Considering the size of this web app testing shoudn't take more than 16 hours.
  - **Roles & Responsibilities**:
    - Product: Acts as a primary contact for development and test team. Also responsible for Project schedule and the overall success of the project.
    - Test: Responsible for Understanding requirements, writing and executing test cases, preparing Requirement Traceability Matrix (RTM), reviewing test cases, Defect reporting and tracking, retesting and regression testing.
  - **Risks and Risk Management**:
    - No Requirements document has been provided by Product and no Design or API documentation has been provided by the Development team.
    - No Use case scenarios have been provided by Product.
    - There is no single source for UI mockups so there is a high chance of things being out of sync between Product, Dev, Test and UX design teams.
  - **Exit criteria**: There will be extensive and different testing done on test environments before deployment to Production and then sanity testing will be done on Live after deployment to Production.

- **Test Case Scenarios**
  - UI Tests
    - Launch app:
      1. Successful launch of the Swag Labs FE url <https://www.saucedemo.com/> using Internet Explorer browser takes you to the Login Page.
      2. Successful launch of the Swag Labs FE url <https://www.saucedemo.com/> using Google Chrome browser takes you to the Login Page.
      3. Successful launch of the Swag Labs FE url <https://www.saucedemo.com/> using Firefox browser takes you to the Login Page.
      4. Successful launch of the Swag Labs FE url <https://www.saucedemo.com/> using Safari browser takes you to the Login Page.
      5. Successful launch of the Swag Labs FE url <https://www.saucedemo.com/> using Android browser takes you to the Login Page.
      6. Successful launch of the Swag Labs FE url <https://www.saucedemo.com/> using Apple browser takes you to the Login Page.
    - Login:
      1. User should be able to login with a valid username and valid password
      2. User should not be able to login with invalid username and invalid password
      3. User should not be able to login with invalid username and valid password
      4. User should not be able to login with valid username and invalid password
      5. User should not be able to login without entering both username and password
      6. Password field should mask user password
      7. User account should be locked for X amount of time if number of login attempts have been reached
      8. User should not be able to login if account is blocked
    - Forgot password:
      1. User should be able to login after resetting password
    - Password change:
      1. User should be able to login with new password after changing password
      2. User should not be able to login with old password after changing password
    - Remember me:
      1. Remember me works and doesn't require user to re-enter username and password

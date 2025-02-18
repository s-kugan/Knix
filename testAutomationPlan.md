## Purpose of Test Automation

The purpose of implementing test automation is to ensure that regression tests are conducted for each deployment without the need for manual testing. This approach allows us to deliver the product on time by identifying and addressing potential issues more efficiently.

## 1. Initial Setup and Framework Selection

### Tools and Frameworks:

- **Nightwatch.js**: A comprehensive framework for all platforms, including web and mobile native, for end-to-end testing and cross-browser testing.
- **Jenkins**: For continuous integration and continuous deployment (CI/CD).
- **BrowserStack**: To test responsiveness on different devices.
- **GitHub**: For version control.
- **Visual Studio Code**: VS Code, is a free, open-source code editor developed by Microsoft

### Design Pattern

- **Page Object Model**:
  The Page Objects methodology is a popular pattern for writing end-to-end tests by encapsulating the pages or page fragments of a web app into objects. The purpose of a page object is to enable a software client to perform actions and verify outcomes on a page, abstracting away the underlying HTML actions needed to manipulate the page.
  Introduction to Page Objects can be found in this article: [PageObject](https://martinfowler.com/bliki/PageObject.html).

## 2. Setting Up the Project

### a. Installing Dependencies:

1. **Install Node.js Engine (v20.18.3)**:
   When you install Node.js, the npm (Node Package Manager) is also installed by default. npm is a crucial tool for managing packages in your Node.js projects, allowing you to easily install, update, and manage dependencies.

2. **Install Nightwatch.js**:
   Please follow the [Nightwatch documentation](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html) to install and configure Nightwatch.

## 3. Guideline for Writing Test Scripts using Nightwatch.js

- Follow the [Nightwatch quickstart guide](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html) to create and run tests.
- Nightwatch also supports BDD syntax. Please refer to this [documentation](https://nightwatchjs.org/guide/writing-tests/test-syntax-bdd.html) for BDD style.

### 4. Mobile App Support

Nightwatch enables automation testing of native mobile applications via Appium. It combines the robustness of Appium with the enhanced developer experience provided by Nightwatch. This enables end-to-end functional testing of native mobile apps on Android and iOS devices.

### 5. Web Accessibility Testing

Nightwatch also supports web accessibility testing. Nightwatch v3 includes the aXe-core package developed by Deque Systems as a plugin, enabling 90 different types of accessibility tests for WCAG compliance.

### 6. Test Environment:

Nightwatch provides test environments to maintain a better structure of configuration for large-scale projects. You can define multiple sections (environments) under the `test_settings` dictionary to override specific values per environment. Please refer to the [Nightwatch test environments guide](https://nightwatchjs.org/guide/concepts/test-environments.html) for more details.

Example configuration:

```json
{
  "src_folders": ["./tests"],

  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "globals": {
        "myGlobalVar": "some value",
        "otherGlobal": "some other value"
      }
    },
    "integration": {
      "launch_url": "http://staging.host",
      "globals": {
        "myGlobalVar": "other value"
      }
    }
  }
}
```

## 7. Parallel Testing in Nightwatch

### a. Parallel Testing in Nightwatch:

Nightwatch supports running tests in parallel in two main ways:

- **Via test workers**
- **By running multiple test environments in parallel**

Please refer to the Nightwatch parallel testing guide for more details: [Parallel Testing in Nightwatch](https://nightwatchjs.org/guide/concepts/parallel-testing-in-nightwatch.html).

## 8. Integrating with Jenkins

### a. Setting Up Jenkins:

1. **Install Jenkins**: Use a cloud-based Jenkins service or set up a local Jenkins server.
2. **Install Required Plugins**: Install necessary plugins like NodeJS, GitHub, and Nightwatch.js.
3. **Create a New Pipeline Job**: Set up a new pipeline job in Jenkins.

### b. Configuring Jenkins Pipeline:

1. Please refer to the Nightwatch Jenkins integration guide to set up and run tests on a Jenkins instance: [Nightwatch Jenkins Integration](https://nightwatchjs.org/guide/ci-integrations/run-nightwatch-on-jenkins.html).
2. **Configure Environment Variables**: To run your tests on BrowserStack from Jenkins, set up the environment variables by going to "Manage Jenkins -> Configure System -> Environment Variables".

## 9. Running the Automation Script

1. **Trigger the Pipeline**: Schedule Nightwatch tests on Jenkins to run on each deployment to cover the regression test.
2. **Monitor Test Results**: Review the test results in Jenkins and fix any failing tests.

## 10. Continuous Integration and Reporting

1. **Integrate with Slack or Email**: Configure Jenkins to send notifications for build successes or failures.
2. **Generate Reports**: Use Nightwatch.js reporters to generate HTML or JUnit reports. Please refer to the guide: [Nightwatch Jenkins Reporting](https://nightwatchjs.org/guide/ci-integrations/run-nightwatch-on-jenkins.html#postdoc-view-html-reports).

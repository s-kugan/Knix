const seleniumServer = require("@nightwatch/selenium-server");

/***Import-browser-drivers**************/
const chromeDriver = require("chromedriver");
const geckoDriver = require("geckodriver");
const edgeDriver = require("edgedriver");

/*******Import-browser-settings ********************************/
const chromeSettings = require("./browser_settings/chromeSettings");
const firefoxSettings = require("./browser_settings/firefoxSettings");
const edgeSettings = require("./browser_settings/edgeSettings");


let testconf = require("./config/knix");
const path = require("path");

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test'],
  output_folder: "./tests_output",
  page_objects_path: ['nightwatch/page-objects'],
  //persist_globals:true,
  custom_commands_path: ['nightwatch/custom-commands'],
  custom_assertions_path: ['nightwatch/custom-assertions'],
  //globals_path: "./globals/globals.js",
  skip_testcases_on_fail: false,
  //end_session_on_fail: false,
  disable_colors: false,
  selenium: {
    start_process: false,    
    server_path: seleniumServer.path,
    check_process_delay: 5000,
    log_path: "./logs",
    //host: '127.0.0.1',
    port: 4444,
    cli_args: {       
        "webdriver.gecko.driver": geckoDriver.path,
        "webdriver.edge.driver": edgeDriver.path,
        "webdriver.chrome.driver": chromeDriver.path,
    },
  },
  webdriver: {
    start_process: true,
    /*status_poll_interval: 500,
    max_status_poll_tries: 5,
    process_create_timeout: 12000, */
    request_timeout_options: {
      timeout: 45000,
      retry_attempts: 3,
    },
    log_path: "./logs",
  },
  screenshots: {
    enabled: true,
    on_failure: true,
    on_error: true,
    path: "./screenshots/",
  },
  /********parallel-settings****************/
  live_output: true,
  detailed_output: false,
  parallel_process_delay: 500,
  test_workers: {
    enabled: false,
    workers: "auto",
  }, 

  /********************Command-to-run-the-tests************************
     node nightwatch --config nightwatch.wings.conf.js --tag WingsMemberAddressBook --env WingsUATChrome --reporter html-reporter.js
     node nightwatch --config nightwatch.wings.conf.js --tag wingstravelflightbooking --env WingsTravelStagingChrome --reporter html-reporter.js
     ********************************************************************/
  test_settings: testconf.test_settings(
    chromeSettings,
    edgeSettings,
    firefoxSettings
  ),
};


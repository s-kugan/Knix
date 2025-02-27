module.exports = {
  //controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout: 60000,

  /*

    // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  abortOnAssertionFailure: false,

  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval: 10000,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout: 10000,

 

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned: false,

  /

  // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
  // or an error is thrown
  unitTestsTimeout: 2000,

  // controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time
  // or an error is thrown
  customReporterCallbackTimeout: 20000,

  // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
  retryAssertionTimeout: 5000,

  test_env: {
    myGlobal: "test_global",
    beforeEach: function () {},
  },

  before(cb) {
    //console.log('GLOBAL BEFORE')
    cb();
  },

  after(cb) {
    //console.log('GLOBAL AFTER')
    cb();
  },

  afterEach(browser, cb) {
    browser.perform(function () {
      //console.log('GLOBAL afterEach')
      cb();
    });
  },

  */

  //before: fileHelper.deleteOneFile(path.join(__dirname, "../logs/alllogs.txt")),

  /*  beforeEach: function (browser, done) {
    browser.getLogs();
    done();
  }, */

  reporter: function (results, cb) {
    console.log("results", results);
    cb();
  },
};

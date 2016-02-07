/**
* @file protractor.conf.js
*/

var SpecReporter = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

module.exports.config = {
  specs: ['smoke-test.spec.js'],
  baseUrl: 'http://walmyr-filho.com/',

  capabilities: { 'browserName': 'chrome' },
  framework: 'jasmine2',
  directConnect: true,

  // Here you will set things that have to happen before start testing.
  onPrepare: function() {
    // Used for non-angular apps
    browser.ignoreSynchronization = true;

    // Add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    jasmine.getEnv().addReporter(
       new HtmlScreenshotReporter({
         dest: 'screenshots',
         filename: 'Walmyr\'s-brand-test-report.html'
       })
     );

    browser.driver.manage().window().maximize();

    // Used to define a default delay between actions.
    var origFn = browser.driver.controlFlow().execute;

    browser.driver.controlFlow().execute = function() {
      var args = arguments;

      // queue 200ms wait.
      origFn.call(browser.driver.controlFlow(), function() {
        return protractor.promise.delayed(100);
      });

      return origFn.apply(browser.driver.controlFlow(), args);
    };
  },

  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 999999
  }
};

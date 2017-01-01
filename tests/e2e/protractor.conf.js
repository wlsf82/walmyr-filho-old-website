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
  },

  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true
  }
};

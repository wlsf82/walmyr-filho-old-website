var SpecReporter = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

module.exports.config = {
  specs: ['smoke-test.spec.js'],
  baseUrl: 'http://walmyr-filho.com/',

  capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
          'args': [
              '--headless'
          ]
      }
  },
  directConnect: true,

  onPrepare: function() {
    browser.ignoreSynchronization = true;

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

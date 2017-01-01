/**
 * @file smoke-test.spec.js
 */

var PageObject = require('./page-object');

describe( 'Walmyr Personal Brand Web', function() {

  var pageObject = new PageObject();

  beforeEach(function() {
    browser.get('/');
  });

  it( 'Home page - pt', function() {
    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/');
    });

    checkHomePageMainElements();
  });

  it( 'Home page - es', function() {
    pageObject.spanishLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/es-index.html');
    });

    checkHomePageMainElements();
  });

  it( 'Home page - en', function() {
    pageObject.englishLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/en-index.html');
    });

    checkHomePageMainElements();
  });

  it( 'Consultancy page - pt', function() {
    pageObject.consultancyPTLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/consultoria.html');
    });

    checkConsultancyPageMainElements();
  });

  it( 'Consultancy page - es', function() {
    pageObject.spanishLink.click();
    pageObject.consultancyESLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/es-consultoria.html');
    });

    checkConsultancyPageMainElements();
  });

  it( 'Consultancy page - en', function() {
    pageObject.englishLink.click();
    pageObject.consultancyENLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/consultancy.html');
    });

    checkConsultancyPageMainElements();
  });

  it( 'Development page - pt', function() {
    pageObject.developmentPTLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/desenvolvimento.html');
    });

    checkDevelopmentPageMainElements();
  });

  it( 'Development page - es', function() {
    pageObject.spanishLink.click();
    pageObject.developmentESLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/desarrollo.html');
    });

    checkDevelopmentPageMainElements();
  });

  it( 'Development page - en', function() {
    pageObject.englishLink.click();
    pageObject.developmentENLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/development.html');
    });

    checkDevelopmentPageMainElements();
  });

  it ( 'Page not found', function() {
    browser.get('jsldf');

    var pageNotFound = $('#page-not-found');

    expect(pageNotFound.isDisplayed()).toBe(true);
  });

  function checkHomePageMainElements() {
    var mainElements = {
      header: $('.header'),
      content: $('.content'),
      presentation: $('.content #presentation'),
      services: $('.content .services'),
      consultancy: $('.content .services #consultancy'),
      development: $('.content .services #development'),
      courses: $('.content .services #courses'),
      blog: $('.content #blog'),
      speachesAndEvents: $('.content #speaches-and-events'),
      technologies: $('.content #technologies'),
      footer: $('.footer'),
      language: $('.language'),
    }

    checkMainElements(mainElements);
  }

  function checkConsultancyPageMainElements() {
    var mainElements = {
      header: $('.header'),
      content: $('.content'),
      consultancyPage: $('.content #consultancy-page'),
      consultancyDescription: $('.content #consultancy-page .consultancy-description'),
      consultancyContent: $('.content #consultancy-page .consultancy-content'),
      consultancyCTA: $('.content #consultancy-page .call-to-action'),
      footer: $('.footer'),
      language: $('.language'),
    }

    checkMainElements(mainElements);
  }

  function checkDevelopmentPageMainElements() {
    var mainElements = {
      header: $('.header'),
      developmentContent: $('.development-content'),
      developmentPage: $('.development-content #development-page'),
      testTypes: $('.development-content #development-page .test-types'),
      unitTests: $('.development-content #development-page .test-types #unit-tests'),
      integrationTests: $('.development-content #development-page .test-types #integration-tests'),
      uiTests: $('.development-content #development-page .test-types #ui-tests'),
      footer: $('.footer'),
      language: $('.language'),
    }

    checkMainElements(mainElements);
  }

  function checkMainElements(mainElements) {
    for (var key in mainElements) {
      expect(mainElements[key].isDisplayed()).toBe(true);
    }
  }

});

/**
* @file smoke-test.spec.js
*/

describe( 'Walmyr Personal Brand Web', function() {

  it( 'Home page - pt', function() {
    browser.get('/');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/');
    });

    checkHomePageMainElements();
  });

  it( 'Home page - es', function() {
    browser.get('es-index.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/es-index.html');
    });

    checkHomePageMainElements();
  });

  it( 'Home page - en', function() {
    browser.get('en-index.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/en-index.html');
    });

    checkHomePageMainElements();
  });

  it( 'Consultancy page - pt', function() {
    browser.get('/consultoria.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/consultoria.html');
    });

    checkConsultancyPageMainElements();
  });

  it( 'Consultancy page - es', function() {
    browser.get('/es-consultoria.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/es-consultoria.html');
    });

    checkConsultancyPageMainElements();
  });

  it( 'Consultancy page - en', function() {
    browser.get('/consultancy.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/consultancy.html');
    });

    checkConsultancyPageMainElements();
  });

  it( 'Development page - pt', function() {
    browser.get('/desenvolvimento.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/desenvolvimento.html');
    });
  });

  it( 'Development page - es', function() {
    browser.get('/desarrollo.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/desarrollo.html');
    });
  });

  it( 'Development page - en', function() {
    browser.get('/development.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/development.html');
    });
  });

  it ('Page not found', function() {
    browser.get('jsldf');

    var pageNotFoundImage = $('img[src="./img/404.jpg"]');

    expect(pageNotFoundImage.isDisplayed()).toBe(true);
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

    for (var key in mainElements) {
      expect(mainElements[key].isDisplayed()).toBe(true);
    }
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

    for (var key in mainElements) {
      expect(mainElements[key].isDisplayed()).toBe(true);
    }
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

    for (var key in mainElements) {
      expect(mainElements[key].isDisplayed()).toBe(true);
    }
  }

});

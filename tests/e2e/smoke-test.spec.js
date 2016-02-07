/**
* @file smoke-test.spec.js
*/

describe( 'Walmyr Personal Brand Web', function() {

  it( 'Home page - pt', function() {
    browser.get('/');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/');
    });
  });

  it( 'Home page - es', function() {
    browser.get('es-index.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/es-index.html');
    });
  });

  it( 'Home page - en', function() {
    browser.get('en-index.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/en-index.html');
    });
  });

  it( 'Consultancy page - pt', function() {
    browser.get('/consultoria.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/consultoria.html');
    });
  });

  it( 'Consultancy page - es', function() {
    browser.get('/es-consultoria.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/es-consultoria.html');
    });
  });

  it( 'Consultancy page - en', function() {
    browser.get('/consultancy.html');

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://walmyr-filho.com/consultancy.html');
    });
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

});

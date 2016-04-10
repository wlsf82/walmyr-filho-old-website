var PageObject = function() {

  this.spanishLink = element(by.css('a[href="es-index.html"]'));
  this.englishLink = element(by.css('a[href="en-index.html"]'))

  this.consultancyPTLink = element.all(by.css('a[href="consultoria.html"]')).first();
  this.consultancyESLink = element.all(by.css('a[href="es-consultoria.html"]')).first();
  this.consultancyENLink = element.all(by.css('a[href="consultancy.html"]')).first();

  this.developmentPTLink = element.all(by.css('a[href="desenvolvimento.html"]')).first();
  this.developmentESLink = element.all(by.css('a[href="desarrollo.html"]')).first();
  this.developmentENLink = element.all(by.css('a[href="development.html"]')).first();

};

module.exports = PageObject;

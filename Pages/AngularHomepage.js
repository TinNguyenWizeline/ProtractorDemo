var AngularHomepage = function() {
  var nameInput = element(by.model('yourName'));
  var greeting = element(by.binding('yourName'));

  this.get = function() {
    browser.get('http://www.angularjs.org');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
    browser.sleep('999');
  };

  this.getGreetingText = function() {
    return greeting.getText();
  };
};
module.exports = new AngularHomepage();
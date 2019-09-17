var angularHomepage = require('./Pages/AngularHomepage');

describe('AngularJS homepage', function() {

	beforeAll(function(){
         browser.driver.manage().window().maximize();
    });

  	it('should greet the named user', function() {
    	angularHomepage.get();

    	angularHomepage.setName('John');

    	expect(angularHomepage.getGreetingText()).toEqual('Hello John!');
  	});
});
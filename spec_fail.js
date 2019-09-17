var angularHomepage = require('./Pages/AngularHomepage');
describe('AngularJS homepage', function() {
  it('should greet the named user (fail)', function() {
    angularHomepage.get();

    angularHomepage.setName('John');

    expect(angularHomepage.getGreetingText()).toEqual('Hello Alice!');
  });
});
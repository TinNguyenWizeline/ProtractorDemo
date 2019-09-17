exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'spec.js',
    'spec_fail.js'
    ],
  multiCapabilities: [{
    browserName: 'firefox',
    'shardTestFiles': true,
    'maxInstances': 2
  }, 
  {
    browserName: 'chrome',
    'shardTestFiles': true,
    'maxInstances': 2
  }]
};
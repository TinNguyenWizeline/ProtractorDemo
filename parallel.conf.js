// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js', 'spec_fail.js'],
  capabilities: {
	  'browserName': 'chrome',
	  'shardTestFiles': true,
	  'maxInstances': 2
  },
}
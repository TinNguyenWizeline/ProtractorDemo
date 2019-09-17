exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec_fail.js'],
	capabilities: {
		'browserName': 'chrome',
	    chromeOptions: {
	        args: ["--headless"]
	    }
	},
}
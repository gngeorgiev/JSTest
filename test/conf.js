

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['startPageTests.spec.js', 'questionTests.spec.js', 'resultTests.spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
};

describe('Result Page Tests', function () {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/test/end');
    });

    it('should add my result', function () {
        var name = 'Peter';
        element(by.id('inputName')).sendKeys(name);
        element(by.id('save-result')).click();
        browser.waitForAngular();
        expect(element(by.binding('player.name')).getText()).toEqual(name);
    })
});
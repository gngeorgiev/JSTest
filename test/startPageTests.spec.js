
describe('JavaScript Test Start Page', function () {
    var ptor = protractor.getInstance();

    beforeEach(function() {
        browser.get('http://localhost:8080/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('JavaScript Test');
    });

    it('should go to next page', function () {
        element(by.id('start-button')).click();
        browser.waitForAngular();
        ptor.getCurrentUrl().then(function(url){
            expect(url).toEqual('http://localhost:8080/#/test/start')
        });
    });

});
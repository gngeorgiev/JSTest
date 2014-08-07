
describe('JavaScript Test Start Page', function () {

    beforeEach(function() {
        browser.get('http://localhost:8080/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('JavaScript Test');
    });

});
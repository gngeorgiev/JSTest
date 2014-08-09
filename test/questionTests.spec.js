
describe('Question Page Tests', function () {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/test/start');
    });

    it('should open pop-up box', function () {
        element.all(by.binding('answer')).then(function (questions) {
            expect(questions.length).toBe(5);
            questions[0].click();
            expect(element(by.binding('data[questionNumber].answer')).isDisplayed()).toBe(true);
        })
    });
});
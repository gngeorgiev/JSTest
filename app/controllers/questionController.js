'use strict';

mainModule.controller('QuestionController', function ($scope, $http) {

    $http.get('../../data/questions.json')
        .success(function(data) {
            $scope.data = data;
        })
        .error(function() {
            $scope.data = {
                title: "Some Title",
                body: "Some text",
                posibleAnswers: ["Yes", "No"],
                correct: "Yes",
                points: "1"
            };
        });

});
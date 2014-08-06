'use strict';

mainModule.controller('QuestionController', function ($scope, $http, $location) {
    $scope.questionNumber = 0;
    $scope.checkForAnswer = false;
    $scope.showTrueAnswer = false;
    $scope.showFalseAnswer = false;

    $http.get('../../data/questions.json')
        .success(function (data) {
            $scope.data = data;
        })
        .error(function () {
            $scope.data = {
                title: "Reload the page!",
                body: "Can't load the questions.",
                possibleAnswers: ["Yes", "No"],
                correct: "Yes",
                points: "1",
                answer: "Reload"
            };
        });

    $scope.checkAnswer = function (answer) {
        if (!$scope.checkForAnswer) {
            $scope.checkForAnswer = true;
            if (answer === $scope.data[$scope.questionNumber].correct) {
                $scope.showTrueAnswer = true;
            } else {
                $scope.showFalseAnswer = true;
            }
        }
    };

    $scope.nextQuestion = function () {
        if ($scope.data.length - 1 === $scope.questionNumber) {
            $location.path('/test/end');
        } else {
            $scope.questionNumber += 1;
            $scope.checkForAnswer = false;
            $scope.showTrueAnswer = false;
            $scope.showFalseAnswer = false;
        }
    };



});
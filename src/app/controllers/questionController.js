'use strict';

mainModule.controller('QuestionController', function ($scope, $http, $location) {
    $scope.restartGame = function () {
        $scope.questionNumber = 0;
        $scope.maxPoints = 0;
        $scope.points = 0;
        $scope.checkForAnswer = false;
        $scope.showTrueAnswer = false;
        $scope.showFalseAnswer = false;
        $scope.gradeGood = false;
        $scope.gradeBad = false;
        $scope.gradeExcellent = false;
    };

    $scope.restartGame();

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

    $scope.checkAnswer = function (answer, points) {
        if (!$scope.checkForAnswer) {
            $scope.checkForAnswer = true;
            if (answer === $scope.data[$scope.questionNumber].correct) {
                $scope.showTrueAnswer = true;
                $scope.points += Number(points);
            } else {
                $scope.showFalseAnswer = true;
            }
            $scope.maxPoints += Number(points);
        }
    };

    $scope.nextQuestion = function () {
        if ($scope.data.length - 1 === $scope.questionNumber) {
            $scope.giveGrade();
            $location.path('/test/end');
        } else {
            $scope.questionNumber += 1;
            $scope.checkForAnswer = false;
            $scope.showTrueAnswer = false;
            $scope.showFalseAnswer = false;
        }
    };

    $scope.saveResult = function () {
        var name = document.getElementById('inputName').value;
        localStorage.setItem(name, $scope.points);
        $location.path('/test/rating');
    };

    $scope.giveGrade = function () {
        if ($scope.points >= ($scope.maxPoints - 5)) {
            $scope.gradeExcellent = true;
        } else if ($scope.points >= ($scope.maxPoints / 2)) {
            $scope.gradeGood = true;
        } else {
            $scope.gradeBad = true;
        }
    };
});
'use strict';

mainModule.controller('PlayerController', function ($scope) {
    $scope.points = 0;
    $scope.name = '';
    $scope.email = '';
    $scope.players = [];

    $scope.addPoints = function (points) {
        $scope.points += points;
    };

});
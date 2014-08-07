'use strict';

mainModule.controller('PlayerDataController', function ($scope) {
    $scope.playerData = [];
    var i,
        key,
        value;

    for (i = 0; i < localStorage.length; i += 1) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);

        $scope.playerData.push({name: key, points: value});
    }
});
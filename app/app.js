'use strict';

var mainModule = angular.module('mainModule', ['ngRoute', 'ngAnimate']);

mainModule.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/startTest.html'
            })
            .when('/start', {
                templateUrl: 'templates/question.html'
            })
            .when('/endtest', {
                templateUrl: 'templates/endtest.html'
            })
            .otherwise({
                redirectTo: '/'
            });
}]);
'use strict';

var mainModule = angular.module('mainModule', ['ngRoute', 'ngAnimate']);

mainModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/test', {
            templateUrl: 'templates/startTest.html'
        })
        .when('/test/start', {
            templateUrl: 'templates/question.html'
        })
        .when('/test/end', {
            templateUrl: 'templates/result.html'
        })
        .when('/test/rating', {
            templateUrl: 'templates/rating.html'
        })
        .otherwise({
            redirectTo: '/test'
        });
}]);